import express from "express";
import multer from "multer";
import { analyzeVoice } from "../controllers/voiceScoreController";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/score/:id", upload.single("audio"), async (req, res, next) => {
  try {
	await analyzeVoice(req, res);
  } catch (err) {
	next(err);
  }
});

export default router;
