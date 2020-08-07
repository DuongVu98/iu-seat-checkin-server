import { Controller, Post, Body, Get } from "@nestjs/common";
import { SeatDto } from "../dto/app.dto";
import { AddSeatService } from "../services/add-seat.service";
import { GetAllSeatsService } from "../services/get-all-seats.service";

@Controller("admin")
export class AdminController {
    constructor(private addSeatService: AddSeatService, private getAllSeatsService: GetAllSeatsService) {}

    @Post("add-seat")
    async addSeat(@Body() seatDto: SeatDto): Promise<void> {
        this.addSeatService.execute(seatDto);
    }

    @Get("all-seats")
    async getAllSeats(): Promise<SeatDto[]>{
        return this.getAllSeatsService.execute();
    }
}
