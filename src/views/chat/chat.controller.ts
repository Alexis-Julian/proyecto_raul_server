import { Controller, Render, Get, Req } from '@nestjs/common';
import { ChatService } from './chat.service';
@Controller('view/chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}
  @Get()
  @Render('chat')
  async ViewChat(@Req() req: any) {
    const friends = await this.chatService.getFriends(1, 10, req);
    return { user: req.session.user, friends: friends, layout: 'home' };
  }
}
