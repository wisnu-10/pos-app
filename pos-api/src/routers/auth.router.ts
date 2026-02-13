import { Router } from 'express';
import { authController } from '../controllers/auth.controller';
import { jwtVerify } from '../middlewares/auth.middleware';
import { JWT_ACCOUNT_ACTIVATION_SECRET_KEY, JWT_TOKEN_SECRET_KEY } from '../configs/main.config';
const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get("/session", jwtVerify(JWT_TOKEN_SECRET_KEY!), authController.session);
router.put("/activation", authController?.activation);

export default router;
