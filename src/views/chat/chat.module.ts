import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { FriendsModule } from 'src/api/friends/friends.module';

@Module({
  imports: [FriendsModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
