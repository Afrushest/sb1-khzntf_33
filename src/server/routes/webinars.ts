import express from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { validateRequest } from '../middleware/validation';
import { createEventSchema, updateEventSchema } from '../schemas/events';
import {
  getWebinars,
  getWebinarById,
  createWebinar,
  updateWebinar,
  deleteWebinar
} from '../controllers/webinars';

const router = express.Router();

// Public routes
router.get('/', getWebinars);
router.get('/:id', getWebinarById);

// Protected routes
router.use(authenticate);

// Admin only routes
router.post('/', authorize(['admin']), validateRequest(createEventSchema), createWebinar);
router.put('/:id', authorize(['admin']), validateRequest(updateEventSchema), updateWebinar);
router.delete('/:id', authorize(['admin']), deleteWebinar);

export default router;