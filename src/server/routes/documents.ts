import express from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { validateRequest } from '../middleware/validation';
import { createDocumentSchema, updateDocumentSchema } from '../schemas/documents';
import {
  getDocuments,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument,
  downloadDocument
} from '../controllers/documents';

const router = express.Router();

// Public routes
router.get('/', getDocuments);
router.get('/:id', getDocumentById);
router.get('/:id/download', downloadDocument);

// Protected routes
router.use(authenticate);

// Admin only routes
router.post('/', authorize(['admin']), validateRequest(createDocumentSchema), createDocument);
router.put('/:id', authorize(['admin']), validateRequest(updateDocumentSchema), updateDocument);
router.delete('/:id', authorize(['admin']), deleteDocument);

export default router;