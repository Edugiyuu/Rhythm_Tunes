import { Request, Response } from 'express';
import { v2 as cloudinary } from 'cloudinary';
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
                    res.status(500).json({ error: 'Erro ao enviar música.' });
                    return;
                }

                const newMusic = new Music({
                    title: JSON.parse(req.body.title),
                    description: JSON.parse(req.body.description),
                    musicUrl: result.secure_url,
                    cloudinaryId: result.public_id
                });


                await newMusic.save();

                res.status(201).json({ message: 'Música enviada com sucesso!', music: newMusic });
            }
        );

        // envia o buffer pra stream
        stream.end(req.file.buffer);

    } catch (error) {
        console.error('Erro ao enviar música:', error);
        res.status(500).json({ error: 'Erro interno.' });
    }
};
