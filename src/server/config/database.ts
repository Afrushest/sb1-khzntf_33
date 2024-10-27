import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
import { hashPassword } from '../utils/password';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const db = createClient({
  url: process.env.DATABASE_URL || 'file:local.db',
  authToken: process.env.DATABASE_AUTH_TOKEN
});

export const initDatabase = async () => {
  try {
    // Users table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        role TEXT NOT NULL,
        country TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Initialize admin user if not exists
    const adminResult = await db.execute({
      sql: 'SELECT * FROM users WHERE email = ?',
      args: ['admin@linsoft.com']
    });

    if (adminResult.rows.length === 0) {
      const adminId = uuidv4();
      const hashedPassword = await hashPassword('admin123');

      await db.execute({
        sql: `
          INSERT INTO users (id, email, password, first_name, last_name, role, country)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `,
        args: [adminId, 'admin@linsoft.com', hashedPassword, 'Admin', 'User', 'admin', 'Tunisia']
      });

      console.log('Admin user initialized');
    }

    // Events table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS events (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        date TEXT NOT NULL,
        time TEXT NOT NULL,
        type TEXT NOT NULL,
        location TEXT,
        theme TEXT,
        agenda TEXT,
        max_participants INTEGER,
        current_participants INTEGER DEFAULT 0,
        has_waiting_list BOOLEAN DEFAULT false,
        is_past BOOLEAN DEFAULT false,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Registrations table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS registrations (
        id TEXT PRIMARY KEY,
        event_id TEXT NOT NULL,
        user_id TEXT NOT NULL,
        status TEXT NOT NULL,
        registration_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        cancellation_reason TEXT,
        FOREIGN KEY (event_id) REFERENCES events(id),
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `);

    // Documents table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS documents (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        resource_type TEXT NOT NULL,
        theme TEXT NOT NULL,
        display_page TEXT NOT NULL,
        file_url TEXT NOT NULL,
        file_name TEXT NOT NULL,
        file_size TEXT NOT NULL,
        download_count INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
};

export default db;