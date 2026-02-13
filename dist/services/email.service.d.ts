export declare class EmailService {
    private static transporter;
    private static getTemplate;
    private static replaceTemplateVariables;
    static verifyConnection(): Promise<boolean>;
    static sendVerificationEmail(to: string, name: string, verificationToken: string): Promise<void>;
    static sendPasswordResetEmail(to: string, name: string, resetToken: string): Promise<void>;
}
//# sourceMappingURL=email.service.d.ts.map