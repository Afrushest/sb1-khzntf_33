import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import db from '../config/database';
import { hashPassword } from '../utils/password';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await db.execute({
      sql: `
        SELECT id, email, first_name, last_name, role, country, created_at
        FROM users
        ORDER BY created_at DESC
      `
    });

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
};

export const getUserById = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    // Only allow admins to view other users' profiles
    if (req.user?.role !== 'admin' && req.user?.id !== id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const result = await db.execute({
      sql: `
        SELECT id, email, first_name, last_name, role, country, created_at
        FROM users
        WHERE id = ?
      `,
      args: [id]
    });

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Error fetching user' });
  }
};

export const updateUser = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Only allow admins to update other users' profiles
    if (req.user?.role !== 'admin' && req.user?.id !== id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    // If password is being updated, hash it
    if (updates.password) {
      updates.password = await hashPassword(updates.password);
    }

    const setClause = Object.keys(updates)
      .map(key => {
        // Convert camelCase to snake_case for database
        const dbKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
        return `${dbKey} = ?`;
      })
      .join(', ');

    const values = Object.values(updates);

    await db.execute({
      sql: `UPDATE users SET ${setClause} WHERE id = ?`,
      args: [...values, id]
    });

    const updatedUser = await db.execute({
      sql: `
        SELECT id, email, first_name, last_name, role, country, created_at
        FROM users
        WHERE id = ?
      `,
      args: [id]
    });

    res.json(updatedUser.rows[0]);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Error updating user' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await db.execute({
      sql: 'DELETE FROM users WHERE id = ?',
      args: [id]
    });

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Error deleting user' });
  }
};