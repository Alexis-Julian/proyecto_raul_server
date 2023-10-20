import { OnModuleInit } from '@nestjs/common';
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Users } from 'src/schemas/user.model';

import { extractUserConnecting } from 'src/utils/socket.utils';

interface UserActive extends Users {
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

      //Mueve al usuario a otro chat
      socket.on('moveChat', ({ idchat }) => {
        user.chat_friend = idchat;
      });

      //Envio de mensajes
      socket.on('sendMessage', (body) => {
        socket.emit(user.chat_friend + ':message', 'Hola!');
      });

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
