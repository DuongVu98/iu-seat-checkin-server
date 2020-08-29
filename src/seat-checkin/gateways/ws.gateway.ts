import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
    WebSocketServer,
    MessageBody,
    ConnectedSocket,
} from "@nestjs/websockets";
import { Logger } from "@nestjs/common";
import { Socket, Server } from "socket.io";

@WebSocketGateway()
export class WsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private logger: Logger = new Logger("WsGateway");

    @WebSocketServer()
    websocketServer: Server;

    afterInit(server: Server): void {
        this.logger.log(`Initialized ${server}`);
    }

    handleConnection(client: Socket, ...args: any[]): void {
        this.logger.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: Socket): void {
        this.logger.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage("msgToServer")
    handleMessage(@ConnectedSocket() client: Socket, @MessageBody() payload: string): void {
        this.logger.log(`Receive message from client: ${client} with payload: ${payload}`);
        this.websocketServer.emit("msgToClient", payload);
    }
}
