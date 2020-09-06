import { Controller, Post, Body, Get, Param, Logger } from "@nestjs/common";
import { SeatDto, CreateAccountForm, ChangePasswordForm } from "../dto/app.dto";
import { AddSeatService } from "../services/add-seat.service";
import { GetAllSeatsService } from "../services/get-all-seats.service";
import { UpdateSeatService } from "../services/update-seat.service";
import { DeleteSeatCodeService } from "../services/delete-seat.service";
import { SetOccupiedService } from "../services/set-occupied.service";
import { CreateAccountService } from "../services/create-account.service";
import { ChangePasswordService } from "../services/change-password.service";
import { ConfigService } from "@nestjs/config";

@Controller("admin")
export class AdminController {
    logger: Logger = new Logger("AdminController");
    constructor(
        private addSeatService: AddSeatService,
        private getAllSeatsService: GetAllSeatsService,
        private updateSeatService: UpdateSeatService,
        private deleteSeatService: DeleteSeatCodeService,
        private setOccupiedService: SetOccupiedService,
        private createAccountService: CreateAccountService,
        private changePasswordService: ChangePasswordService,
        private configService: ConfigService
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

    @Post("new-account")
    async createNewAccount(@Body() data: CreateAccountForm, @Param() params: { key: string }): Promise<void> {
        if (params.key === this.configService.get<string>("ADMIN_KEY")) {
            return this.createAccountService.execute(data);
        }
    }

    @Post("change-password/:key")
    async changePassword(@Body() data: ChangePasswordForm, @Param() params: { key: string }): Promise<void> {
        this.logger.log(`keyInput: ${params.key} - keyFromEnv: ${this.configService.get<string>("ADMIN_KEY")}`);
        if (params.key === this.configService.get<string>("ADMIN_KEY")) {
            return this.changePasswordService.execute(data.accountId, data.newPassword);
        }
    }
}
