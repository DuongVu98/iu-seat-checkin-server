import { Injectable } from "@nestjs/common";
import { SeatRepository } from "../repositories/seat.repo";
import { SeatDto } from "../dto/app.dto";

@Injectable()
export class UpdateSeatService {
    constructor(private seatRepository: SeatRepository) {}

    async execute(seatDto: SeatDto): Promise<void> {
        this.seatRepository.updateSeat(seatDto.id, seatDto);
    }
}
