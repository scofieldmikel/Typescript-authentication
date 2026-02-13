import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';
/**
 * Middleware to validate the request body against a given Zod schema.
 *
 * @param schema - The Zod schema to validate the request body against.
 * @returns An Express middleware function that validates the request body.
 *
 * @throws Will respond with a 400 status code and a JSON error message if validation fails.
 */
export declare const validateRequest: (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=validate.d.ts.map