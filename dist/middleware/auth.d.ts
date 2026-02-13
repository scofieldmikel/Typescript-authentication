import { Request, Response, NextFunction } from 'express';
export interface AuthRequest extends Request {
    userId?: string;
}
/**
 * Middleware to authenticate a JWT token from the request headers.
 *
 * @param req - The request object, extended to include `userId` if authentication is successful.
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 *
 * @returns A response with status 401 if no token is provided, or status 403 if the token is invalid or expired.
 *
 * @remarks
 * This middleware expects the JWT token to be provided in the `Authorization` header in the format `Bearer <token>`.
 * If the token is valid, the `userId` from the token payload is attached to the request object.
 */
export declare const authenticateToken: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=auth.d.ts.map