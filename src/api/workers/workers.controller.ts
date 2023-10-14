import { Controller, Post, Res, Body } from '@nestjs/common';
import { Response } from 'express';

interface Thumbnails {
  thumbnails: string;
}

@Controller('api/workers')
export class WorkersController {
  @Post()
  Process(@Res() res: Response, @Body() url: Thumbnails) {
    res.send('1');
    const img = new Image();
    img.src = url.thumbnails;
    img.addEventListener('load', () => {
      res.send(img);
    });
  }
}
