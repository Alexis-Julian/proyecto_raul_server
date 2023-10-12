import { Controller, Get, Render } from '@nestjs/common';
import { AuthViewService } from './auth-view.service';
@Controller('view/auth')
export class AuthViewController {
  constructor(private authService: AuthViewService) {}
  @Get()
  @Render('auth')
  AuthView() {
    return { message: 'Hello World' };
  }
}
