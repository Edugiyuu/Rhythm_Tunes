import mongoose, { Schema, model, Document } from 'mongoose';

interface IMusic extends Document {
    title: string;
    musicUrl: string;
    cloudinaryId: string;
}

const musicSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    musicUrl: { type: String, required: true },
    cloudinaryId: { type: String, required: true } // <- esse aqui
});


export default model<IMusic>('Music', musicSchema);
