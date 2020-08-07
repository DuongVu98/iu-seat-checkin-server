import { Injectable } from "@nestjs/common";
import { SeatRepository } from "../repositories/seat.repo";
import { SeatDto } from "../dto/app.dto";

@Injectable()
export class GetAllSeatsService {
    seatDtoList: SeatDto[] = [];

    constructor(private seatRepository: SeatRepository) {}

    async execute(): Promise<SeatDto[]> {
        await this.seatRepository.findAll().then(seatModels => {
            seatModels.forEach(seatModel => {
                this.seatDtoList.push(
                    new SeatDto()
                        .setDelegateCode(seatModel.delegateCode)
                        .setId(seatModel._id)
                );
            });
        });

        return this.seatDtoList;
    }
}
