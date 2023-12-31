import jwt from 'jsonwebtoken';

export const getBasePath = process.cwd();

export function verifyToken(token: string): boolean {
  try {
    return !!jwt.verify(token, process.env.JwtSecret);
  } catch (error) {
    console.log(error);
  }
}
