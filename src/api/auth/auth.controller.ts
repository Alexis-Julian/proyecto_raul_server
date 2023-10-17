import { Controller, Post, Body, Res, Req, Get, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { Response } from 'express';

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
    return this.authService.login(userObject, response);
  }

  @Get('/sessions')
  async getSessions(@Req() req: any) {
    return req.session;
  }
}
