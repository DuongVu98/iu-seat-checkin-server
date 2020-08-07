import { SeatRepository } from "../repositories/seat.repo";
import { Injectable, Logger } from "@nestjs/common";
import { SeatDto } from "../dto/app.dto";

@Injectable()
export class AddSeatService {
    constructor(private seatRepository: SeatRepository) {}

    async execute(seatDto: SeatDto): Promise<void> {
        this.seatRepository.createSeat(seatDto).then(savedSeat => {
            Logger.log(savedSeat);
        });
    }
}
