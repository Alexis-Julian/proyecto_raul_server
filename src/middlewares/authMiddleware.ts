import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export default class authMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    try {
      const { token } = req.cookies;
      const pass = jwt.verify(token, process.env.JwtSecret);
      if (pass) res.redirect('/view/products');
    } catch (err) {
      next();
    }
  }
}
