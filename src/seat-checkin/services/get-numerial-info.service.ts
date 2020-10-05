import { Injectable } from "@nestjs/common";
import { SeatRepository } from "../repositories/seat.repo";
import { NumerialInfoDto } from "../dto/app.dto";

@Injectable()
export class GetNumerialInfoService {
    constructor(private seatRepository: SeatRepository) {}

    async execute(): Promise<NumerialInfoDto> {
        const availableDelegatesAmout = parseInt(process.env.AVAILABLE_DELEGATES_AMOUNT, 10);
        let delegatesAmount;
        let occupiedAmount;
        let guestsAmount;
        let occupiedGuestsAmount;

        await this.seatRepository.coutAll().then(res => {
            delegatesAmount = res;
        });
        await this.seatRepository.countAllOccupiedSeat().then(res => {
            occupiedAmount = res;
        });
        await this.seatRepository.countAllGuests().then(res => {
            guestsAmount = res;
        });
        await this.seatRepository.countAllOccupiedGuests().then(res => {
            occupiedGuestsAmount = res;
        });
        return new NumerialInfoDto()
            .thisSetDelegatesAmount(availableDelegatesAmout + delegatesAmount - guestsAmount)
            .thisSetOccupiedAmount(occupiedAmount - occupiedGuestsAmount);
    }
}
