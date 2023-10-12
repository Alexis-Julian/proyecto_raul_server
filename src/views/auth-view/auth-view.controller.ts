import { Controller, Get, Res, Render } from '@nestjs/common';
import { Response } from 'express';
import { AuthViewService } from './auth-view.service';
@Controller('view/auth')
export class AuthViewController {
  constructor(private authService: AuthViewService) {}
  @Get()
  @Render('auth')
  AuthView(@Res() res: Response) {
    return { message: 'Hello World' };
  }
}
