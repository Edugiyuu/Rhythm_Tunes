import { Router } from 'express';
import { uploadFields } from '../middleware/upload';
import { getAllMusics, getMusic, uploadMusic } from '../controllers/musicController';

const router = Router();

router.post('/upload-music', uploadFields, uploadMusic);
router.get('/music/:id', getMusic);

router.get('/musics', getAllMusics);

export default router;