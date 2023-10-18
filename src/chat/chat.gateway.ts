import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(81, { cors: { origin: '*' } })
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  afterInit(server: any) {
    console.log('Esto se ejecuta cuando inicia');
  }
  handleConnection(client: any, ...args: any[]) {
    console.log('Hola alguien se conecto al socket');
  }
  handleDisconnect(client: any) {}

  @SubscribeMessage('chat_message')
  test(client: Socket, data) {
    console.log(data);
  }
}
