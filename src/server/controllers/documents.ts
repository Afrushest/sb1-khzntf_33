import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import db from '../config/database';

export const getDocuments = async (req: Request, res: Response) => {
  try {
    const { resourceType, theme, displayPage } = req.query;
    let sql = 'SELECT * FROM documents';
    const conditions = [];
    const args = [];

    if (resourceType) {
      conditions.push('resource_type = ?');
      args.push(resourceType);
    }

    if (theme) {
      conditions.push('theme = ?');
      args.push(theme);
    }

    if (displayPage) {
      conditions.push('display_page = ?');
      args.push(displayPage);
    }

    if (conditions.length > 0) {
      sql += ' WHERE ' + conditions.join(' AND ');
    }

    sql += ' ORDER BY created_at DESC';

    const result = await db.execute({ sql, args });
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ message: 'Error fetching documents' });
  }
};

export const getDocumentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await db.execute({
      sql: 'SELECT * FROM documents WHERE id = ?',
      args: [id]
    });

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Document not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching document:', error);
    res.status(500).json({ message: 'Error fetching document' });
  }
};

export const createDocument = async (req: Request, res: Response) => {
  try {
    const documentData = req.body;
    const documentId = uuidv4();

    await db.execute({
      sql: `
        INSERT INTO documents (
          id, title, resource_type, theme, display_page,
          file_url, file_name, file_size
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      args: [
        documentId,
        documentData.title,
        documentData.resourceType,
        documentData.theme,
        documentData.displayPage,
        documentData.fileUrl,
        documentData.fileName,
        documentData.fileSize
      ]
    });

    const newDocument = await db.execute({
      sql: 'SELECT * FROM documents WHERE id = ?',
      args: [documentId]
    });

    res.status(201).json(newDocument.rows[0]);
  } catch (error) {
    console.error('Error creating document:', error);
    res.status(500).json({ message: 'Error creating document' });
  }
};

export const updateDocument = async (req: Request, res: Response) => {
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
      sql: `UPDATE documents SET ${setClause} WHERE id = ?`,
      args: [...values, id]
    });

    const updatedDocument = await db.execute({
      sql: 'SELECT * FROM documents WHERE id = ?',
      args: [id]
    });

    res.json(updatedDocument.rows[0]);
  } catch (error) {
    console.error('Error updating document:', error);
    res.status(500).json({ message: 'Error updating document' });
  }
};

export const deleteDocument = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await db.execute({
      sql: 'DELETE FROM documents WHERE id = ?',
      args: [id]
    });

    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    console.error('Error deleting document:', error);
    res.status(500).json({ message: 'Error deleting document' });
  }
};

export const downloadDocument = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Get document details
    const result = await db.execute({
      sql: 'SELECT * FROM documents WHERE id = ?',
      args: [id]
    });

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Document not found' });
    }

    const document = result.rows[0];

    // Update download count
    await db.execute({
      sql: 'UPDATE documents SET download_count = download_count + 1 WHERE id = ?',
      args: [id]
    });

    // In a real application, you might want to:
    // 1. Check if the user has permission to download
    // 2. Generate a signed URL if using cloud storage
    // 3. Stream the file instead of redirecting
    // 4. Handle file not found errors
    
    // For now, we'll redirect to the file URL
    res.redirect(document.file_url);
  } catch (error) {
    console.error('Error downloading document:', error);
    res.status(500).json({ message: 'Error downloading document' });
  }
};