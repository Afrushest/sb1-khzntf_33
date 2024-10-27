import express from 'express';
import { login, register } from '../controllers/auth';
import { validateRequest } from '../middleware/validation';
import { loginSchema, registerSchema } from '../schemas/auth';

const router = express.Router();

router.post('/login', validateRequest(loginSchema), login);
router.post('/register', validateRequest(registerSchema), register);

export default router;