import { Request, Response } from 'express';
import cloudinary from '../config/cloudinary';
import Music from '../models/music';


// O file seria music[0] ou instrumental[0]
const uploadToCloudinary = (file: Express.Multer.File): Promise<any> => {
    // não entendi o que é resolve e reject
    // resolve: função chamada quando o upload é bem-sucedido
    // reject: função chamada quando o upload falha
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { resource_type: 'auto', folder: 'musics' },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    //se tudo der certo ele retorna a URL do arquivo
                    resolve(result);
                }
            }
        );
        // Envia o arquivo para o Cloudinary
        stream.end(file.buffer);
    });
};

//Recebe os arquivos, faz upload para o Cloudinary e salva no banco
export const uploadMusic = async (req: Request, res: Response): Promise<any> => {
    try {
        // Pega os arquivos do request
        const { music, instrumental } = req.files as {
            music: Express.Multer.File[];
            instrumental: Express.Multer.File[];
        };

        // Faz upload dos arquivos com a função uploadToCloudinary
        const musicResult = await uploadToCloudinary(music[0]);
        const instrumentalResult = await uploadToCloudinary(instrumental[0]);

        // Cria uma nova musica com os dados recebidos
        const newMusic = new Music({
            name: JSON.parse(req.body.name),                  // Nome da música
            musicUrl: musicResult.secure_url,                 // URL segura da música com vocal
            instrumentalUrl: instrumentalResult.secure_url,    // URL segura do instrumental
            cloudinaryId: musicResult.public_id,              // ID para referência no Cloudinary
            lyrics: JSON.parse(req.body.lyrics)               // Array com a letra sincronizada
        });

        // Salva a nova música no banco de dados MongoDB
        await newMusic.save();

        res.status(201).json({
            message: 'Música e instrumental enviados com sucesso!',
            music: newMusic
        });

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

        res.status(200).json(music);
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