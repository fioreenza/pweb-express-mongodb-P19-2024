import mongoose, { Document } from 'mongoose';
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
declare const _default: mongoose.Model<Book, {}, {}, {}, mongoose.Document<unknown, {}, Book> & Book & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>;
export default _default;
