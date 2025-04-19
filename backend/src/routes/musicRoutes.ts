import { Router, Request, Response } from 'express';
import upload from '../middleware/upload';
import { getAllMusics, getMusic, uploadMusic } from '../controllers/musicController';

const router = Router();

router.post('/upload-music', upload.single('audio'), uploadMusic);
router.get('/music/:id', getMusic);

router.get('/musics', getAllMusics);

export default router;