import { Controller, Post, Body, Res, Req, Get, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { Response } from 'express';
import { Users } from 'src/schemas/user.model';
import { Session } from 'express-session';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  userRegister(@Res({ passthrough: true }) response: any, @Req() req: any, @Body() userObject: RegisterAuthDto) {
    return this.authService.register(userObject, (token: string) => {
      req.session.token = token;
      response.cookie('token', token);
    });
  }

  @Post('login')
  @HttpCode(202)
  userLogin(@Res({ passthrough: true }) response: Response, @Req() req: any, @Body() userObject?: LoginAuthDto) {
    return this.authService.login(userObject, (user: Users, token: string) => {
      req.session.user = user;
      response.cookie('token', token);
    });
  }

  @Get('logout')
  getSessions(@Res({ passthrough: true }) res: Response, @Req() req: any) {
    return this.authService.logout(res, req);
  }
}
