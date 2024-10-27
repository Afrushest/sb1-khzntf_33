import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { AuthRequest } from '../middleware/auth';
import db from '../config/database';

export const getEvents = async (req: Request, res: Response) => {
  try {
    const { type, isPast } = req.query;
    let sql = 'SELECT * FROM events';
    const conditions = [];
    const args = [];

    if (type) {
      conditions.push('type = ?');
      args.push(type);
    }

    if (isPast !== undefined) {
      conditions.push('is_past = ?');
      args.push(isPast === 'true');
    }

    if (conditions.length > 0) {
      sql += ' WHERE ' + conditions.join(' AND ');
    }

    sql += ' ORDER BY date ASC';

    const result = await db.execute({ sql, args });
    
    // Convert numeric values to proper types
    const events = result.rows.map(event => ({
      ...event,
      maxParticipants: Number(event.max_participants),
      currentParticipants: Number(event.current_participants),
      hasWaitingList: Boolean(event.has_waiting_list),
      isPast: Boolean(event.is_past)
    }));
    
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: 'Error fetching events' });
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await db.execute({
      sql: 'SELECT * FROM events WHERE id = ?',
      args: [id]
    });

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Convert numeric values to proper types
    const event = {
      ...result.rows[0],
      maxParticipants: Number(result.rows[0].max_participants),
      currentParticipants: Number(result.rows[0].current_participants),
      hasWaitingList: Boolean(result.rows[0].has_waiting_list),
      isPast: Boolean(result.rows[0].is_past)
    };

    res.json(event);
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ message: 'Error fetching event' });
  }
};

export const createEvent = async (req: Request, res: Response) => {
  try {
    const eventData = req.body;
    const eventId = uuidv4();

    await db.execute({
      sql: `
        INSERT INTO events (
          id, title, description, date, time, type, location,
          theme, agenda, max_participants, current_participants, has_waiting_list
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      args: [
        eventId,
        eventData.title,
        eventData.description,
        eventData.date,
        eventData.time,
        eventData.type,
        eventData.location,
        eventData.theme,
        eventData.agenda,
        Number(eventData.maxParticipants) || 0,
        Number(eventData.currentParticipants) || 0,
        Boolean(eventData.hasWaitingList)
      ]
    });

    const newEvent = await db.execute({
      sql: 'SELECT * FROM events WHERE id = ?',
      args: [eventId]
    });

    // Convert numeric values to proper types
    const event = {
      ...newEvent.rows[0],
      maxParticipants: Number(newEvent.rows[0].max_participants),
      currentParticipants: Number(newEvent.rows[0].current_participants),
      hasWaitingList: Boolean(newEvent.rows[0].has_waiting_list),
      isPast: Boolean(newEvent.rows[0].is_past)
    };

    res.status(201).json(event);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: 'Error creating event' });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
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
      sql: `UPDATE events SET ${setClause} WHERE id = ?`,
      args: [...values, id]
    });

    const updatedEvent = await db.execute({
      sql: 'SELECT * FROM events WHERE id = ?',
      args: [id]
    });

    if (updatedEvent.rows.length === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Convert numeric values to proper types
    const event = {
      ...updatedEvent.rows[0],
      maxParticipants: Number(updatedEvent.rows[0].max_participants),
      currentParticipants: Number(updatedEvent.rows[0].current_participants),
      hasWaitingList: Boolean(updatedEvent.rows[0].has_waiting_list),
      isPast: Boolean(updatedEvent.rows[0].is_past)
    };

    res.json(event);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ message: 'Error updating event' });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Delete all registrations first
    await db.execute({
      sql: 'DELETE FROM registrations WHERE event_id = ?',
      args: [id]
    });

    // Then delete the event
    await db.execute({
      sql: 'DELETE FROM events WHERE id = ?',
      args: [id]
    });

    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ message: 'Error deleting event' });
  }
};

export const registerForEvent = async (req: AuthRequest, res: Response) => {
  try {
    const { id: eventId } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    // Check if event exists and has space
    const eventResult = await db.execute({
      sql: 'SELECT * FROM events WHERE id = ?',
      args: [eventId]
    });

    if (eventResult.rows.length === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const event = eventResult.rows[0];
    const currentParticipants = Number(event.current_participants);
    const maxParticipants = Number(event.max_participants);

    // Check if user is already registered
    const existingRegistration = await db.execute({
      sql: 'SELECT * FROM registrations WHERE event_id = ? AND user_id = ?',
      args: [eventId, userId]
    });

    if (existingRegistration.rows.length > 0) {
      return res.status(400).json({ message: 'Already registered for this event' });
    }

    // Determine registration status
    let status = 'confirmed';
    if (currentParticipants >= maxParticipants) {
      if (!event.has_waiting_list) {
        return res.status(400).json({ message: 'Event is full' });
      }
      status = 'waitlist';
    }

    // Create registration
    const registrationId = uuidv4();
    await db.execute({
      sql: `
        INSERT INTO registrations (id, event_id, user_id, status)
        VALUES (?, ?, ?, ?)
      `,
      args: [registrationId, eventId, userId, status]
    });

    // Update participant count if confirmed
    if (status === 'confirmed') {
      await db.execute({
        sql: 'UPDATE events SET current_participants = current_participants + 1 WHERE id = ?',
        args: [eventId]
      });
    }

    res.status(201).json({ message: 'Registration successful', status });
  } catch (error) {
    console.error('Error registering for event:', error);
    res.status(500).json({ message: 'Error registering for event' });
  }
};

export const cancelRegistration = async (req: AuthRequest, res: Response) => {
  try {
    const { id: eventId } = req.params;
    const userId = req.user?.id;
    const { reason } = req.body;

    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    // Check if registration exists
    const registrationResult = await db.execute({
      sql: 'SELECT * FROM registrations WHERE event_id = ? AND user_id = ?',
      args: [eventId, userId]
    });

    if (registrationResult.rows.length === 0) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    const registration = registrationResult.rows[0];

    // Update registration status
    await db.execute({
      sql: `
        UPDATE registrations 
        SET status = 'cancelled', cancellation_reason = ? 
        WHERE event_id = ? AND user_id = ?
      `,
      args: [reason, eventId, userId]
    });

    // If it was a confirmed registration, decrease participant count
    if (registration.status === 'confirmed') {
      await db.execute({
        sql: 'UPDATE events SET current_participants = current_participants - 1 WHERE id = ?',
        args: [eventId]
      });

      // Check if there's someone on the waitlist to promote
      const waitlistResult = await db.execute({
        sql: `
          SELECT * FROM registrations 
          WHERE event_id = ? AND status = 'waitlist' 
          ORDER BY registration_date ASC 
          LIMIT 1
        `,
        args: [eventId]
      });

      if (waitlistResult.rows.length > 0) {
        const waitlistedRegistration = waitlistResult.rows[0];
        
        // Promote from waitlist to confirmed
        await db.execute({
          sql: 'UPDATE registrations SET status = ? WHERE id = ?',
          args: ['confirmed', waitlistedRegistration.id]
        });

        await db.execute({
          sql: 'UPDATE events SET current_participants = current_participants + 1 WHERE id = ?',
          args: [eventId]
        });
      }
    }

    res.json({ message: 'Registration cancelled successfully' });
  } catch (error) {
    console.error('Error cancelling registration:', error);
    res.status(500).json({ message: 'Error cancelling registration' });
  }
};

export const getEventRegistrations = async (req: Request, res: Response) => {
  try {
    const { id: eventId } = req.params;

    const registrations = await db.execute({
      sql: `
        SELECT r.*, u.first_name, u.last_name, u.email 
        FROM registrations r
        JOIN users u ON r.user_id = u.id
        WHERE r.event_id = ?
        ORDER BY r.registration_date DESC
      `,
      args: [eventId]
    });

    res.json(registrations.rows);
  } catch (error) {
    console.error('Error fetching event registrations:', error);
    res.status(500).json({ message: 'Error fetching event registrations' });
  }
};