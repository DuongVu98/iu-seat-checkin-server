import { Injectable } from "@nestjs/common";
import { SeatRepository } from "../repositories/seat.repo";
import { SeatDto } from "../dto/app.dto";

@Injectable()
export class GetAllSeatsService {
    constructor(private seatRepository: SeatRepository) {}

    async execute(): Promise<SeatDto[]> {
        const seatsList: SeatDto[] = [];
        await this.seatRepository.findAll().then(seatModels => {
            seatModels.forEach(seatModel => {
                seatsList.push(
                    new SeatDto()
                        .setDelegateCode(seatModel.delegateCode)
                        .setId(seatModel._id)
                        .setRow(seatModel.row)
                        .setColumn(seatModel.column)
                );
            });
        });

        return seatsList;
    }
}
