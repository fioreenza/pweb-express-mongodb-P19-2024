import { Request, Response } from 'express';
export declare const borrowBook: (req: Request, res: Response, next: unknown) => Promise<Response<any, Record<string, any>>>;
export declare const returnBook: (req: Request, res: Response, next: unknown) => Promise<Response<any, Record<string, any>>>;
