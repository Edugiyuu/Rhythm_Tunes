import { Router } from 'express';
import upload from '../middleware/upload';
import { uploadMusic } from '../controllers/musicController';

const router = Router();

router.post('/upload-audio', upload.single('audio'), uploadMusic);

export default router;