
// src/config/config.ts
import dotenv from 'dotenv';
import path from 'path';
import { StringValue } from 'ms';

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  port: process.env.PORT || 3000,
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase',
  },
  jwt: {
    secret: process.env.JWT_SECRET as string,
    expiresIn: (process.env.JWT_EXPIRES_IN ?? '1d') as StringValue,
  },
  bcrypt: {
    saltRounds: 10,
  },
  // jwt: {
  //   secret: process.env.JWT_SECRET || 'Yt9zYH+H2pR7n6KZr2bM8c1Q0xvP8l5vZqk1sJmN8Wc=',
  //   expiresIn: process.env.JWT_EXPIRES_IN || '1h',
  // },
  // bcrypt: {
  //   saltRounds: parseInt(process.env.SALT_ROUNDS || '10', 10),
  // },
  email: {
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587', 10),
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  frontend: {
    url: process.env.FRONTEND_URL,
  },
} as const;