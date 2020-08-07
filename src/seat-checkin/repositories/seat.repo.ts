import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { SeatModel } from "../models/seat.model";
import { SeatDto } from "../dto/app.dto";

@Injectable()
export class SeatRepository {
    constructor(@InjectModel("seats") private seatModel: Model<SeatModel>){}

    async createSeat(seat: SeatDto): Promise<SeatModel> {
        const newSeat = new this.seatModel(seat);
        return newSeat.save();
    }

    async findAll(): Promise<SeatModel[]> {
        this.seatModel.find().then(
            debug => {
                Logger.log(debug);
            }
        );
        return this.seatModel.find();
    }
}