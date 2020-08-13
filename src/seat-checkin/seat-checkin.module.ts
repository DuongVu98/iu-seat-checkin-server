import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SeatSchema } from "./models/seat.model";
import { SeatRepository } from "./repositories/seat.repo";
import { AddSeatService } from "./services/add-seat.service";
import { AdminController } from "./api/admin.controller";
import { ViewerController } from "./api/viewer.controller";
import { GetAllSeatsService } from "./services/get-all-seats.service";
import { UpdateSeatService } from "./services/update-seat.service";

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
    ],
})
export class SeatCheckinModule {}
