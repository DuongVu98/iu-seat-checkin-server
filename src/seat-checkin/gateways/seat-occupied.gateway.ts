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
import { SeatRepository } from "../repositories/seat.repo";

@WebSocketGateway({ namespage: "/occupied-seat" })
export class SeatOccupiedGateway implements OnGatewayInit {
    private logger: Logger = new Logger("WsGateway");

    constructor(private seatRepository: SeatRepository) {}

    @WebSocketServer()
    websocketServer: Server;

    afterInit(server: Server): void {
        this.logger.log(`Initialized chat gateway ${server}`);
    }

    @SubscribeMessage("toggleSeatOccupied")
    handleMessage(@ConnectedSocket() client: Socket, @MessageBody() payload: SeatOccupiedMessage): void {
        this.logger.log(payload);
        this.websocketServer.emit("toggleSeatOccupied", payload);
        this.logTest();
    }

    @SubscribeMessage("fetchApi")
    handleReloadMessage(): void {
        this.websocketServer.emit("fetchApi");
    }

    async logTest(): Promise<void> {
        const availableDelegatesAmout = parseInt(process.env.AVAILABLE_DELEGATES_AMOUNT, 10);
        let occupiedAmount;
        let occupiedGuestsAmount;
        await this.seatRepository.countAllOccupiedSeat().then(res => {
            occupiedAmount = res;
        });
        await this.seatRepository.countAllOccupiedGuests().then(res => {
            occupiedGuestsAmount = res;
        });
        this.logger.log(`occupied elems: ${availableDelegatesAmout} + ${occupiedAmount} - ${occupiedGuestsAmount}}`);
        this.logger.log(`occupied count: ${availableDelegatesAmout + occupiedAmount - occupiedGuestsAmount}`);
    }
}
