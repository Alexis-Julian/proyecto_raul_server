import { Controller, Get, Res } from '@nestjs/common';
import { ViewAuthService } from './view-auth.service';
import { Response } from 'express';

@Controller('view/auth')
export class ViewAuthController {
  constructor(private authService: ViewAuthService) {}

  @Get('/login')
  ViewLogin(@Res() res: Response) {
    return res.render(this.authService.ViewLogin(), {
      message: 'Hello world from the server',
    });
  }

  @Get('/register')
  ViewRegister(@Res() res: Response) {
    return res.render(this.authService.ViewRegister(), {
      message: 'Hello world from the server',
    });
  }

  @Get('/recover')
  ViewRecover(@Res() res: Response) {
    return res.render(this.authService.ViewRecover(), {
      message: 'Hello world from the server',
    });
  }
}
