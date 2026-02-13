import { z } from 'zod';
/**
 * Schema for validating user signup data.
 *
 * This schema ensures that the user provides:
 * - A name that is a string with a minimum length of 2 and a maximum length of 50.
 * - An email that is a valid email address.
 * - A password that is a string with a minimum length of 8 and a maximum length of 100.
 */
export declare const signupSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const resetPasswordSchema: z.ZodObject<{
    password: z.ZodString;
}, z.core.$strip>;
export declare const forgotPasswordSchema: z.ZodObject<{
    email: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=user.validators.d.ts.map