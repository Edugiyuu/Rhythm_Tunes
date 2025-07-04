import { Schema, model, Document } from 'mongoose';

interface Lyrics {
    time: number;
    text: string;
}

interface IMusic extends Document {
    name: string;
    musicUrl: string;
    albumImageUrl: string;
    instrumentalUrl: string;
    cloudinaryId: string;
    lyrics:Lyrics[];
    difficulty:string;
}

const musicSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    musicUrl: { type: String, required: true },
    instrumentalUrl: { type: String, required: true },
    albumImageUrl: { type: String, required: true },
    cloudinaryId: { type: String, required: true },
    lyrics: [{
        _id: false,
        time: { type: Number, required: true },
        text: { type: String, required: true }
      }],
    difficulty: { type: String, required: true },
});


export default model<IMusic>('Music', musicSchema);
