import { UserActive } from './gateway';
import { Socket } from 'socket.io';
import { UserDao } from 'src/dao/user.dao';
import { getFriend } from 'src/api/friends/dto/get-friend.dto';
/* interface getFriend {
  email: string;
  role: string;
  username: string;
} */
export class SocketEventHandler {
  socket: Socket;
  user: UserActive;
  userDao: UserDao;
  chat: string;

  constructor(socket: Socket, chat: string, userDao: UserDao) {
    this.socket = socket;
    this.chat = chat;
    this.userDao = userDao;
    this.setupEventListener();
  }

  private setupEventListener() {
    this.ChatChange(); //Avisa cuando el usuario cambia de chat

    this.NewMessage(); // Avisa cuando envia un nuevo mensaje

    this.OnMessage(); //Avisa al usuario que hay un nuevo mensaje
  }
  ChatChange() {
    this.socket.on('client:chat_change', async (idfriend) => {
      const friend = await this.userDao.findById(idfriend);
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

  OnMessage() {}
}
/* export default (socket: any, user: UserActive) => {
  socket.on('moveChat', ({ idchat }) => {
    user.chat_friend = idchat;
  });

  socket.on('client:chat_change', (idfriend) => {
    socket.emit('server:chat_change', idfriend);
  });

  socket.on('sendMessage', (body) => {
    socket.emit(user.chat_friend + ':message', 'Hola!');
  });
}; */
