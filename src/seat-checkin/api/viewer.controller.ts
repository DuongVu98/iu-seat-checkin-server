import { Controller, Get } from "@nestjs/common";
import { SeatDto } from "../dto/app.dto";
import { GetAllSeatsService } from "../services/get-all-seats.service";

@Controller("viewer")
export class ViewerController {

    constructor(private getAllSeatsService: GetAllSeatsService){}

    @Get("all-seats")
    getAllSeats(): Promise<SeatDto[]>{
        return this.getAllSeatsService.execute();
    }
}