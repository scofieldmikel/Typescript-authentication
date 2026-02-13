"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
/**
 * Middleware to validate the request body against a given Zod schema.
 *
 * @param schema - The Zod schema to validate the request body against.
 * @returns An Express middleware function that validates the request body.
 *
 * @throws Will respond with a 400 status code and a JSON error message if validation fails.
 */
const validateRequest = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync(req.body);
            next();
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(400).json({
                    status: 'error',
                    message: 'Validation failed',
                    errors: 'errors' in error ? error.errors : [error.message],
                });
                return;
            }
            next(error);
        }
    };
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=validate.js.map