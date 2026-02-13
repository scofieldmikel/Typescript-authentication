import { Response } from 'express';
export declare class CustomError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number);
}
export declare const createCustomError: (message: string, statusCode: number) => CustomError;
/**
 * Handles errors in controller functions and sends appropriate HTTP responses.
 *
 * @param error - The error object that was thrown.
 * @param res - The Express response object.
 * @returns The HTTP response with the appropriate status code and error message.
 *
 * If the error is an instance of `CustomError`, it sends a response with the status code and message from the error.
 * Otherwise, it logs the error to the console and sends a 500 Internal Server Error response.
 */
export declare const handleControllerError: (error: unknown, res: Response) => Response;
//# sourceMappingURL=error.d.ts.map