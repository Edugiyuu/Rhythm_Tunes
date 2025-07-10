import { Request, Response } from "express";
import { spawn } from "child_process";
import path from "path";
import fs from "fs";
import Music from "../models/music";

export const analyzeVoice = async (req: Request, res: Response) => {
    try {
        const file = req.file;
        const musicId = req.params.id;

        if (!file) return res.status(400).json({ error: "Nenhum áudio enviado" });
        if (!musicId) return res.status(400).json({ error: "ID da música ausente" });

        const music = await Music.findById(musicId);
        if (!music) return res.status(404).json({ error: "Música não encontrada" });

        const expectedLyrics = music.lyrics.map(line => line.text).join(" ");
        console.log("Letra esperada:", expectedLyrics);

        const audioPath = path.resolve(file.path);

        const pythonProcess = spawn("python", [
            "src/python/transcribe.py",
            audioPath,
            expectedLyrics,
        ]);

        let output = "";
        pythonProcess.stdout.on("data", (data) => {
            console.log("Saída Python:", data.toString());
            output += data.toString();
        });

        pythonProcess.stderr.on("data", (data) => {
            console.error("Erro Python:", data.toString());
        });

        pythonProcess.on("close", () => {
            fs.unlinkSync(audioPath);

            const [scoreStr, transcription] = output.trim().split("\n");
            const score = parseFloat(scoreStr) || 0;

            res.json({ score, transcription });
        });
    } catch (error) {
        console.error("Erro no analyzeVoice:", error);
        res.status(500).json({ error: "Erro ao processar o áudio" });
    }
};
