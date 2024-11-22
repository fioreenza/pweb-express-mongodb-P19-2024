import { Book as BookInterface } from '../models/book.model';
export declare class BookService {
    getAllBooks(): Promise<(import("mongoose").Document<unknown, {}, BookInterface> & BookInterface & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    getBookById(id: string): Promise<import("mongoose").Document<unknown, {}, BookInterface> & BookInterface & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    addNewBook(bookData: Partial<BookInterface>): Promise<import("mongoose").Document<unknown, {}, BookInterface> & BookInterface & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    updateBook(id: string, bookData: Partial<BookInterface>): Promise<import("mongoose").Document<unknown, {}, BookInterface> & BookInterface & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    deleteBook(id: string): Promise<import("mongoose").Document<unknown, {}, BookInterface> & BookInterface & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
declare const _default: BookService;
export default _default;
