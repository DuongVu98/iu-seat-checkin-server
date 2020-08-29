import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SeatSchema } from "./models/seat.model";
import { SeatRepository } from "./repositories/seat.repo";
import { AddSeatService } from "./services/add-seat.service";
import { AdminController } from "./api/admin.controller";
import { ViewerController } from "./api/viewer.controller";
import { GetAllSeatsService } from "./services/get-all-seats.service";
import { UpdateSeatService } from "./services/update-seat.service";
import { DeleteSeatCodeService } from "./services/delete-seat.service";
import { SetOccupiedService } from "./services/set-occupied.service";
import { WsGateway } from "./gateways/ws.gateway";
import { SeatOccupiedGateway } from "./gateways/seat-occupied.gateway";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: "seats", schema: SeatSchema }]),
    ],
    controllers: [AdminController, ViewerController],
    providers: [
        SeatRepository,
        AddSeatService,
        GetAllSeatsService,
        UpdateSeatService,
        DeleteSeatCodeService,
        SetOccupiedService,
        WsGateway,
        SeatOccupiedGateway
    ],
})
export class SeatCheckinModule {}
