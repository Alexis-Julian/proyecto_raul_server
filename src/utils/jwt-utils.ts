import * as jwt from 'jsonwebtoken';

export function parsingToken(token: string): any {
  try {
    return jwt.verify(token, process.env.JwtSecret);
  } catch (e) {
    return null;
  }
}
