import express from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { validateRequest } from '../middleware/validation';
import { createEventSchema, updateEventSchema } from '../schemas/events';
import {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  registerForEvent,
  cancelRegistration,
  getEventRegistrations
} from '../controllers/events';

const router = express.Router();

// Public routes
router.get('/', getEvents);
router.get('/:id', getEventById);

// Protected routes
router.use(authenticate);

// Admin only routes
router.post('/', authorize(['admin']), validateRequest(createEventSchema), createEvent);
router.put('/:id', authorize(['admin']), validateRequest(updateEventSchema), updateEvent);
router.delete('/:id', authorize(['admin']), deleteEvent);
router.get('/:id/registrations', authorize(['admin']), getEventRegistrations);

// User routes
router.post('/:id/register', registerForEvent);
router.delete('/:id/register', cancelRegistration);

export default router;