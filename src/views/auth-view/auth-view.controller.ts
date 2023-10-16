import { Controller, Get, Render } from '@nestjs/common';
import { AuthViewService } from './auth-view.service';
@Controller('view/auth')
export class AuthViewController {
  constructor(private authService: AuthViewService) {}
  @Get('login')
  @Render('login')
  viewLogin() {
    return { message: 'Hola mundo' };
  }

  @Get('register')
  @Render('register')
  viewRegister() {
    return { message: 'Hola mundo' };
  }
}
