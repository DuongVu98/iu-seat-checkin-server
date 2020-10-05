import { SeatRepository } from "../repositories/seat.repo";
import { SeatDto } from "../dto/app.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SetOccupiedService {
    constructor(private seatRepository: SeatRepository) {}

    async execute(id: string, occupied: boolean): Promise<void> {
        await this.seatRepository.findById(id).then(async seatModel => {
            const seatDto = await new SeatDto()
                .thisSetId(seatModel.id)
                .thisSetelegateCode(seatModel.delegateCode)
                .thisSetColumn(seatModel.column)
                .thisSetRow(seatModel.row)
                .thisSetOccupied(occupied);
            return this.seatRepository.updateSeat(seatDto.id, seatDto);
        });
    }
}
