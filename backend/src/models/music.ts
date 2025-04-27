import { Schema, model, Document } from 'mongoose';

interface IMusic extends Document {
    name: string;
    musicUrl: string;
    cloudinaryId: string;
    lyrics:string
}

const musicSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    musicUrl: { type: String, required: true },
    cloudinaryId: { type: String, required: true },
    lyrics: { type: String, required: true }
});


export default model<IMusic>('Music', musicSchema);
