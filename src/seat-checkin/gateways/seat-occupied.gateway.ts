import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    ConnectedSocket,
    MessageBody,
    OnGatewayInit,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { Logger } from "@nestjs/common";
import { SeatOccupiedMessage } from "../dto/occupied-seat.message";

@WebSocketGateway({ namespage: "/occupied-seat" })
export class SeatOccupiedGateway implements OnGatewayInit {
    private logger: Logger = new Logger("WsGateway");

    @WebSocketServer()
    websocketServer: Server;

    afterInit(server: Server): void {
        this.logger.log(`Initialized chat gateway ${server}`);
    }

    @SubscribeMessage("toggleSeatOccupied")
    handleMessage(@ConnectedSocket() client: Socket, @MessageBody() payload: SeatOccupiedMessage): void {
        this.logger.log(payload);
        this.websocketServer.emit("toggleSeatOccupied", payload);
    }
}
