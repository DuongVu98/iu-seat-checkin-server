import { Controller, Get } from "@nestjs/common";
import { SeatDto, NumerialInfoDto } from "../dto/app.dto";
import { GetAllSeatsService } from "../services/get-all-seats.service";
import { GetNumerialInfoService } from "../services/get-numerial-info.service";

@Controller("viewer")
export class ViewerController {
    constructor(
        private getAllSeatsService: GetAllSeatsService,
        private getNumerialInfoService: GetNumerialInfoService
    ) {}

    @Get("all-seats")
    getAllSeats(): Promise<SeatDto[]> {
        return this.getAllSeatsService.execute();
    }

    @Get("numerial-info")
    async getNumberOfDelegates(): Promise<NumerialInfoDto> {
        return this.getNumerialInfoService.execute();
    }
}
