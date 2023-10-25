import { RenderChatFriend } from './utils.js';

export const socket = io();

export const EMIT_MESSAGE_FRIEND = (body) => {
  socket.emit('message', body);
};

export const EMIT_CHANGE_CHAT = (idfriend) => {
  socket.emit('client:chat_change', idfriend);
};

export const ON_CHANGE_CHAT = () => {
  socket.on('server:chat_change', RenderChatFriend);
};
// export const REQUEST_MESSAGE_FRIEND = () => {};
/* socket.emit('chat_message', 123); */
