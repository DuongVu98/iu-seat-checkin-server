import { Injectable } from "@nestjs/common";
import { SeatRepository } from "../repositories/seat.repo";
import { NumerialInfoDto } from "../dto/app.dto";

@Injectable()
export class GetNumerialInfoService {
    constructor(private seatRepository: SeatRepository) {}

    async execute(): Promise<NumerialInfoDto> {
        let delegatesAmount;
        let occupiedAmount;
        let guestsAmount;

        await this.seatRepository.coutAll().then(res => {
            delegatesAmount = res;
        });
        await this.seatRepository.countAllOccupiedSeat().then(res => {
            occupiedAmount = res;
        });
        await this.seatRepository.countAllGuests().then(res => {
            guestsAmount = res;
        })
        return new NumerialInfoDto()
                .thisSetDelegatesAmount(delegatesAmount - guestsAmount)
                .thisSetOccupiedAmount(occupiedAmount);
    }
}
