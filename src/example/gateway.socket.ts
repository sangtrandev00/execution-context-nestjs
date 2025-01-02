import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, } from "@nestjs/websockets";
import { SubscribeMessage } from "@nestjs/websockets";
import { WebSocketGateway } from "@nestjs/websockets";
import { Socket } from "socket.io";
import { WsClient } from "src/custom-decorator/web-socket.decorator";

// Sử dụng trong Gateway
@WebSocketGateway({
    cors: {
        origin: '*',
    }
})
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {

    handleConnection(client: Socket) {
        console.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('message')
    handleMessage(@WsClient() client: any, @MessageBody() data: string) {
        client.emit('response', `Received: ${data}`);
    }
}   