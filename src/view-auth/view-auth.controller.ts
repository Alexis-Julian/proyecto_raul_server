import { Controller, Get } from '@nestjs/common';
import { ViewAuthService } from './view-auth.service';
@Controller('view/auth')
export class ViewAuthController {
  constructor(private authService: ViewAuthService) {}

  @Get('/login')
  ViewLogin() {
    return this.authService.ViewLogin();
  }

  @Get('/register')
  ViewRegister() {
    return this.authService.ViewRegister();
  }

  @Get('/recover')
  ViewRecover() {
    return this.authService.ViewRecover();
  }
}
