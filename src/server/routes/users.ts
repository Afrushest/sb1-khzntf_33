import express from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { 
  getUsers, 
  getUserById, 
  updateUser, 
  deleteUser 
} from '../controllers/users';
import { validateRequest } from '../middleware/validation';
import { updateUserSchema } from '../schemas/users';

const router = express.Router();

router.use(authenticate);

// Admin only routes
router.get('/', authorize(['admin']), getUsers);
router.delete('/:id', authorize(['admin']), deleteUser);

// User routes
router.get('/:id', getUserById);
router.put('/:id', validateRequest(updateUserSchema), updateUser);

export default router;