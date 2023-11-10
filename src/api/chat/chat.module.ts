import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { UserDao } from 'src/dao/user.dao';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.model';
import { ChatSchema } from 'src/schemas/chat.model';
import { ChatDao } from 'src/dao/chat.dao';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: 'Users', schema: UserSchema },
      { name: 'Chats', schema: ChatSchema },
    ]),
  ],
  controllers: [ChatController],
  providers: [ChatService, UserDao, ChatDao],
})
export class ChatModule {}
