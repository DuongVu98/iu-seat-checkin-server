import { Controller, Post, Body, Get, Param, Logger, UseGuards } from "@nestjs/common";
import { SeatDto } from "../dto/app.dto";
import { AddSeatService } from "../services/add-seat.service";
import { GetAllSeatsService } from "../services/get-all-seats.service";
import { UpdateSeatService } from "../services/update-seat.service";
import { DeleteSeatCodeService } from "../services/delete-seat.service";
import { SetOccupiedService } from "../services/set-occupied.service";
import { AdminAuthGuard } from "../guards/auth.guard";

@Controller("admin")
@UseGuards(AdminAuthGuard)
export class AdminController {
    logger: Logger = new Logger("AdminController");
    constructor(
        private addSeatService: AddSeatService,
        private getAllSeatsService: GetAllSeatsService,
        private updateSeatService: UpdateSeatService,
        private deleteSeatService: DeleteSeatCodeService,
        private setOccupiedService: SetOccupiedService
    ) {}

    @Post("add-seat")
    async addSeat(@Body() seatDto: SeatDto): Promise<void> {
        this.addSeatService.execute(seatDto);
    }

    @Get("all-seats")
    async getAllSeats(): Promise<SeatDto[]> {
        return this.getAllSeatsService.execute();
    }

    @Post("update-seat")
    async updateSeat(@Body() seatDto: SeatDto): Promise<void> {
        return this.updateSeatService.execute(seatDto);
    }

    @Get("delete-seat/:seatId")
    async deleteSeatCode(@Param("seatId") seatId: string): Promise<void> {
        return this.deleteSeatService.execute(seatId);
    }

    @Post("set-occupied")
    async setSeatOccupied(@Body() data: { id: string; occupied: boolean }): Promise<void> {
        return this.setOccupiedService.execute(data.id, data.occupied);
    }
}
