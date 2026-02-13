"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const config_1 = require("../config/config");
class EmailService {
    // Create a transporter object using the default SMTP transport
    static transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        auth: {
            user: config_1.config.email.user,
            pass: config_1.config.email.pass,
        },
        debug: true,
        logger: true
    });
    // Read and return the email template content from the specified file
    static async getTemplate(templateName) {
        const templatePath = path_1.default.join(__dirname, '../templates', `${templateName}.html`);
        return await promises_1.default.readFile(templatePath, 'utf-8');
    }
    // Replace variables in the template with actual values
    static replaceTemplateVariables(template, variables) {
        return Object.entries(variables).reduce((acc, [key, value]) => acc.replace(new RegExp(`{{${key}}}`, 'g'), value), template);
    }
    // Verify the SMTP connection
    static async verifyConnection() {
        try {
            await this.transporter.verify();
            console.log('SMTP connection verified successfully');
            return true;
        }
        catch (error) {
            console.error('SMTP connection verification failed:', error);
            return false;
        }
    }
    // Send a verification email to the specified recipient
    static async sendVerificationEmail(to, name, verificationToken) {
        try {
            const template = await this.getTemplate('verifyEmail');
            const verificationLink = `${config_1.config.frontend.url}/verify-email?token=${verificationToken}`;
            const html = this.replaceTemplateVariables(template, {
                name,
                verificationLink,
            });
            const mailOptions = {
                from: `"FredAbod" <${config_1.config.email.user}>`,
                to,
                subject: 'Verify Your Email',
                html,
            };
            const info = await this.transporter.sendMail(mailOptions);
            console.log('Verification email sent successfully:', info.messageId);
        }
        catch (error) {
            console.error('Error sending verification email:', error);
            throw new Error('Failed to send verification email');
        }
    }
    // Send a password reset email to the specified recipient
    static async sendPasswordResetEmail(to, name, resetToken) {
        try {
            const template = await this.getTemplate('resetPassword');
            const resetLink = `${config_1.config.frontend.url}/reset-password?token=${resetToken}`;
            const html = this.replaceTemplateVariables(template, {
                name,
                resetLink,
            });
            const mailOptions = {
                from: `"FredAbod" <${config_1.config.email.user}>`,
                to,
                subject: 'Reset Your Password',
                html,
            };
            const info = await this.transporter.sendMail(mailOptions);
            console.log('Password reset email sent successfully:', info.messageId);
        }
        catch (error) {
            console.error('Error sending password reset email:', error);
            throw new Error('Failed to send password reset email');
        }
    }
}
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map