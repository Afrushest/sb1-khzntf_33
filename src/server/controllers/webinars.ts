import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import db from '../config/database';

export const getWebinars = async (req: Request, res: Response) => {
  try {
    const { isPast } = req.query;
    let sql = `
      SELECT * FROM events 
      WHERE type = 'virtual'
      AND is_past = ?
      ORDER BY date ASC, time ASC
    `;

    const result = await db.execute({
      sql,
      args: [isPast === 'true']
    });

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching webinars:', error);
    res.status(500).json({ message: 'Error fetching webinars' });
  }
};

export const getWebinarById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await db.execute({
      sql: 'SELECT * FROM events WHERE id = ? AND type = ?',
      args: [id, 'virtual']
    });

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Webinar not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching webinar:', error);
    res.status(500).json({ message: 'Error fetching webinar' });
  }
};

export const createWebinar = async (req: Request, res: Response) => {
  try {
    const webinarData = req.body;
    const webinarId = uuidv4();

    await db.execute({
      sql: `
        INSERT INTO events (
          id, title, description, date, time, type,
          theme, agenda, max_participants, current_participants, has_waiting_list,
          recording_url
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      args: [
        webinarId,
        webinarData.title,
        webinarData.description || null,
        webinarData.date,
        webinarData.time,
        'virtual',
        webinarData.theme,
        webinarData.agenda || null,
        webinarData.max_participants || 0,
        0, // current_participants starts at 0
        webinarData.has_waiting_list || false,
        null // recording_url starts as null
      ]
    });

    const newWebinar = await db.execute({
      sql: 'SELECT * FROM events WHERE id = ?',
      args: [webinarId]
    });

    res.status(201).json(newWebinar.rows[0]);
  } catch (error) {
    console.error('Error creating webinar:', error);
    res.status(500).json({ message: 'Error creating webinar' });
  }
};

export const updateWebinar = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const setClause = Object.keys(updates)
      .map(key => {
        const dbKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
        return `${dbKey} = ?`;
      })
      .join(', ');

    const values = Object.values(updates);

    await db.execute({
      sql: `UPDATE events SET ${setClause} WHERE id = ? AND type = ?`,
      args: [...values, id, 'virtual']
    });

    const updatedWebinar = await db.execute({
      sql: 'SELECT * FROM events WHERE id = ?',
      args: [id]
    });

    if (updatedWebinar.rows.length === 0) {
      return res.status(404).json({ message: 'Webinar not found' });
    }

    res.json(updatedWebinar.rows[0]);
  } catch (error) {
    console.error('Error updating webinar:', error);
    res.status(500).json({ message: 'Error updating webinar' });
  }
};

export const deleteWebinar = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Delete all registrations first
    await db.execute({
      sql: 'DELETE FROM registrations WHERE event_id = ?',
      args: [id]
    });

    // Then delete the webinar
    await db.execute({
      sql: 'DELETE FROM events WHERE id = ? AND type = ?',
      args: [id, 'virtual']
    });

    res.json({ message: 'Webinar deleted successfully' });
  } catch (error) {
    console.error('Error deleting webinar:', error);
    res.status(500).json({ message: 'Error deleting webinar' });
  }
};