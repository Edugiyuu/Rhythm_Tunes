import { Request, Response } from 'express';
import cloudinary from '../config/cloudinary';
import Music from '../models/music';

export const uploadMusic = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.file) {
            res.status(400).json({ error: 'Nenhum arquivo enviado.' });
            return;
        }

        const stream = cloudinary.uploader.upload_stream(
            { resource_type: 'auto', folder: 'musics' },
            async (error, result) => {
                if (error || !result) {
                    console.error('Erro no Cloudinary:', error);
                    return res.status(500).json({ error: 'Erro ao enviar música.' }); 
                }

                const newMusic = new Music({
                    name: JSON.parse(req.body.name),
                    musicUrl: result.secure_url,
                    cloudinaryId: result.public_id,
                    lyrics: JSON.parse(req.body.lyrics)
                });

                await newMusic.save();

                res.status(201).json({ message: 'Música enviada com sucesso!', music: newMusic });
            }
        );

        stream.end(req.file.buffer);

    } catch (error) {
        console.error('Erro ao enviar música:', error);
        res.status(500).json({ error: 'Erro interno.' });
    }
};
export const getMusic = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const music = await Music.findById(id);
        console.log('ID da música:', id, music);

        if (!music) {
            res.status(404).json({ error: 'Música não encontrada.' });
        }

        res.status(200).json({ message: 'Music fetched successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Erro interno.' });
    }
};

export const getAllMusics = async (req: Request, res: Response) => {
    try {
        const musics = await Music.find();
        res.status(200).json(musics);
    } catch (error) {
        console.error('Erro ao buscar músicas:', error);
        res.status(500).json({ error: 'Erro interno.' });
    }
};