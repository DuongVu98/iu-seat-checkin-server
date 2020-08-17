import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from '@nestjs/mongoose';
import { SeatCheckinModule } from "./seat-checkin/seat-checkin.module";
import { AppConfig } from "./config/config.module";

@Module({
    imports: [MongooseModule.forRoot(process.env.DB_HOST), SeatCheckinModule, AppConfig],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
