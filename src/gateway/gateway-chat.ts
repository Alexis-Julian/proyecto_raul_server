import { UserActive } from './gateway';

export default (socket: any, user: UserActive) => {
  //Mueve al usuario a otro chat
  socket.on('moveChat', ({ idchat }) => {
    user.chat_friend = idchat;
  });

  //Envio de mensajes
  socket.on('sendMessage', (body) => {
    /*  socket.emit(user.chat_friend + ':message', 'Hola!'); */
  });
};
