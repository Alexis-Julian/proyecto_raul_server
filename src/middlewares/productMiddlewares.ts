import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export default class productsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    next();
  }
}
