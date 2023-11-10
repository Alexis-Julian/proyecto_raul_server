import { OnModuleInit } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Users } from 'src/schemas/user.model';
import { extractUserConnecting } from 'src/utils/socket.utils';
import { UserDao } from 'src/dao/user.dao';
import { User } from './gateway-user';
import { Inject } from '@nestjs/common/decorators';
import { ChatService } from 'src/api/chat/chat.service';

export interface UserActive extends Users {
  chat_friend: string | undefined;
}

/* let UsersActive: Array<UserActive> = []; */
@WebSocketGateway()
export class MyGateway implements OnModuleInit {
  constructor(
    private readonly userDao: UserDao,
    @Inject('getChat') readonly chatService: ChatService,
  ) {}
  @WebSocketServer()
  server: Server;
  onModuleInit() {
    this.server.on('connection', (socket) => {
      new User(socket, extractUserConnecting(socket), this.userDao, this.chatService); //Usuario conectado
    });
  }
}
