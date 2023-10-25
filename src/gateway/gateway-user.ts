import { SocketEventHandler } from './gateway-chat';
import { Socket } from 'socket.io';

export class User extends SocketEventHandler {
  /* userDao: UserDao; */
  chat: string;
  username: string;
  email: string;
  role: string;

  constructor(socket: Socket, user, userDao) {
    super(socket, user.chat, userDao);
    this.username = user.username;
    this.email = user.email;
    this.role = user.role;

    this.AlertConnect();
    this.AlertDisconnect();
  }

  AlertConnect() {
    console.log(`Socket conectado: ${this.username}`);
  }

  AlertDisconnect() {
    this.socket.on('disconnect', () => {
      console.log(this.username);
    });
  }
}
