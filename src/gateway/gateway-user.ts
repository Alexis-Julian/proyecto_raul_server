import { Socket } from 'socket.io';
import { UserActive } from './gateway';
import { UserDao } from 'src/dao/user.dao';
import { getFriend } from 'src/api/friends/dto/get-friend.dto';
import { Inject } from '@nestjs/common/decorators';
export class User {
  /* userDao: UserDao; */
  private chat: string;
  private username: string;
  private email: string;
  private role: string;
  private id: string;
  private socket: Socket;

  constructor(
    socket: Socket,
    user: UserActive,
    @Inject('UserDao') private userDao: UserDao, //Aseguramos que no se cree una instancia nueva por cada user
  ) {
    this.socket = socket;
    this.username = user.username;
    this.email = user.email;
    this.role = user.role;
    this.id = user.id;
    this.setupEventListener(); //Activa los sockets
  }

  private setupEventListener() {
    this.AlertConnect(); //Avisa cuando el usuario se coencta con el backend

    this.ChatChange(); //Avisa cuando el usuario se mueve a otro chat

    this.NewMessage(); // Avisa cuando el usuario manda un mensaje

    this.AlertDisconnect(); //Avisa cuando el usuario se desconecta del backend
  }

  AlertConnect() {
    console.log(`Socket conectado: ${this.username}`);
  }

  ChatChange() {
    this.socket.on('client:chat_change', async (idfriend) => {
      const friend = await this.userDao.test(idfriend);

      console.log(friend);
      this.chat = idfriend;
      this.socket.emit('server:chat_change', new getFriend(friend));
    });
  }

  NewMessage() {
    this.socket.on('message', (message) => {
      console.log('Envio un mensaje');
      console.log(this.chat);
      console.log(message);
    });
  }

  AlertDisconnect() {
    this.socket.on('disconnect', () => {
      console.log('Socket desconectado: ', this.username);
    });
  }
}
