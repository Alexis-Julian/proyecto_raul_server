import { Controller, Get, Param } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('api/chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}
  @Get(':id')
  getChat(@Param('id') id: string) {
    console.log(id);
    return this.chatService.getChat(id);
  }
}
