import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from '@nestjs/mongoose';
import { SeatCheckinModule } from "./seat-checkin/seat-checkin.module";

@Module({
    imports: [MongooseModule.forRoot("mongodb://localhost:27017/iu_seat_checkin"), SeatCheckinModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
