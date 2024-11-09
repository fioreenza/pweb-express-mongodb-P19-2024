import mongoose, { Schema, Document } from 'mongoose';

export interface Book extends Document {
  rating: {
    average: number;
    count: number;
  };
  title: string;
  author: string;
  publishedDate: Date;
  publisher: string;
  description: string;
  coverImage: string;
  tags: string[];
  initialQty: number;
  qty: number;
}

const bookSchema: Schema = new Schema({
  rating: {
    average: { type: Number, required: true },
    count: { type: Number, required: true },
  },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  publisher: { type: String, required: true },
  description: { type: String, required: true },
  coverImage: { type: String, required: true },
  tags: { type: [String], required: true },
  initialQty: { type: Number, required: true },
  qty: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model<Book>('Book', bookSchema);
