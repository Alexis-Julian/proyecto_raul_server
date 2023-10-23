import { Controller, Render, Get, Req } from '@nestjs/common';

@Controller('view/chat')
export class ChatController {
  @Get()
  @Render('chat')
  ViewChat(@Req() req: any) {
    console.log(req);
    return { user: req.session.user, layout: 'home' };
  }
}
