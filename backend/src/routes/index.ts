import { Router } from 'express';
import musicRoutes from './musicRoutes';

const router = Router();

router.use(musicRoutes);

export default router;