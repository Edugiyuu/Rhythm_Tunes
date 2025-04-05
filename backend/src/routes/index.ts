import { Router } from 'express';
import audioRoutes from './audioRoutes';

const router = Router();

router.use(audioRoutes);

export default router;