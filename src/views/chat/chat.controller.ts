import { Controller, Render, Get } from '@nestjs/common';

@Controller('view/chat')
export class ChatController {
  @Get()
  @Render('chat')
  ViewChat() {
    return { message: 'Hello world', layout: 'home' };
  }
}
