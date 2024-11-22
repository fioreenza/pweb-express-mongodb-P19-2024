import { Request, Response } from 'express';
export declare const getAllBooks: (req: Request, res: Response) => Promise<void>;
export declare const getBookById: (req: Request, res: Response, next: unknown) => Promise<Response<any, Record<string, any>>>;
export declare const addNewBook: (req: Request, res: Response) => Promise<void>;
export declare const updateBook: (req: Request, res: Response, next: unknown) => Promise<Response<any, Record<string, any>>>;
export declare const deleteBook: (req: Request, res: Response, next: unknown) => Promise<Response<any, Record<string, any>>>;
