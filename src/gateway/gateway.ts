import { OnModuleInit } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Users } from 'src/schemas/user.model';
import gatewayChat from './gateway-chat';

import { extractUserConnecting } from 'src/utils/socket.utils';

export interface UserActive extends Users {
  chat_friend: string | undefined;
}
let UsersActive: Array<UserActive> = [];
@WebSocketGateway()
export class MyGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;
  onModuleInit() {
    this.server.on('connection', (socket) => {
      //Extrae la informacion del usuario
      const user = extractUserConnecting(socket);
      UsersActive.push(user);
      console.log(`Socket conectado: ${user.username}`);

      gatewayChat(socket, user);

      //Deconecta al usuario
      socket.on('disconnect', () => {
        console.log(`Socket desconectado: ${user.username}`);
        UsersActive = UsersActive.filter((use) => user.id != use.id);
      });
    });
  }

  /* @SubscribeMessage('newMessage')
  onNewMessage(@MessageBody() body: any) {
    const { msg, id } = body;
    console.log(body);
    this.server.emit(`newMessage_${id}`);
  }
  @SubscribeMessage('moveChat')
  onMoveChat(@MessageBody() body: any) {
    console.log(body);
  } */
}
