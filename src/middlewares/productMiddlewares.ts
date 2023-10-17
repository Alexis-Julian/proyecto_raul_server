import { NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
export default class productsMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: NextFunction) {
    try {
      const { token } = req.cookies;

      const payload = jwt.verify(token, process.env.JwtSecret);
      req.session.user = payload;

      return next();
    } catch (err) {
      res.redirect('auth/login');
    }
  }
}
