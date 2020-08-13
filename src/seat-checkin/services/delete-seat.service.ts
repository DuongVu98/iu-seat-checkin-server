import { Injectable } from "@nestjs/common";
import { SeatRepository } from "../repositories/seat.repo";

@Injectable()
export class DeleteSeatCodeService {
    constructor(private seatRepository: SeatRepository) {}

    async execute(seatId: string): Promise<void> {
        this.seatRepository.deleteSeat(seatId);
    }
}
