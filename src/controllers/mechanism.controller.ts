import { Request, Response } from 'express';
import { borrowBookService, returnBookService} from '../services/mechanism.service';

// Controller for borrowing a book
export const borrowBook = async (req: Request, res: Response, next: unknown) => {
  try {
    const bookId = req.params.id; // Get the book ID from the route parameter
    const userId = req.body.userId; // Get the user ID from the JWT token (passed in authenticate middleware)

    // Call the borrow book service
    const updatedQty = await borrowBookService(bookId);

    // Respond with the updated quantity of the book
    return res.status(200).json({
      status: 'success',
      message: 'Successfully borrowed book',
      data: {
        currentQty: updatedQty, // Return the updated quantity of the book
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 'error',
      message: (error as any).message || 'Something went wrong',
      data: {},
    });
  }
};

// Controller for returning a book
export const returnBook = async (req: Request, res: Response, next: unknown) => {
  try {
    const bookId = req.params.id; // Get the book ID from the route parameter
    const userId = req.body.userId; // Get the user ID from the JWT token (passed in authenticate middleware)

    // Call the return book service
    const updatedQty = await returnBookService(bookId);

    // Respond with the updated quantity of the book
    return res.status(200).json({
      status: 'success',
      message: 'Successfully returned book',
      data: {
        currentQty: updatedQty, // Return the updated quantity of the book
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 'error',
      message: (error as any).message || 'Something went wrong',
      data: {},
    });
  }
};
