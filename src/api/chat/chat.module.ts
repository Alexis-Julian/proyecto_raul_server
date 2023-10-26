import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { UserDao } from 'src/dao/user.dao';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.model';
@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }])],
  controllers: [ChatController],
  providers: [
    ChatService,
    UserDao,
    {
      provide: 'UserDao', // Proporciona el nombre con el que se inyecta UserDao en la clase User
      useClass: UserDao, // La clase UserDao que se debe instanciar
    },
  ],
})
export class ChatModule {}
