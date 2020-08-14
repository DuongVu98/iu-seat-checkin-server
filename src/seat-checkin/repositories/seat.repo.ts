import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { SeatModel } from "../models/seat.model";
import { SeatDto } from "../dto/app.dto";

@Injectable()
export class SeatRepository {
    constructor(@InjectModel("seats") private seatModel: Model<SeatModel>) {}

    async createSeat(seat: SeatDto): Promise<SeatModel> {
        const newSeat = new this.seatModel(seat);
        return newSeat.save();
    }

    async findAll(): Promise<SeatModel[]> {
        return this.seatModel.find();
    }

    async findById(id: string): Promise<SeatModel> {
        return this.seatModel.findById(id);
    }

    async updateSeat(id: string, seatDto: SeatDto): Promise<SeatModel> {
        return this.seatModel.findByIdAndUpdate(id, seatDto, { new: true });
    }

    async deleteSeat(id: string): Promise<any> {
        return await this.seatModel.findByIdAndRemove(id);
    }
}
