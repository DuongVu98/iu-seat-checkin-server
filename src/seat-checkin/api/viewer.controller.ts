import { Controller, Get, Post, Body } from "@nestjs/common";
import { SeatDto, NumerialInfoDto, LoginForm, LoginResponse } from "../dto/app.dto";
import { GetAllSeatsService } from "../services/get-all-seats.service";
import { GetNumerialInfoService } from "../services/get-numerial-info.service";
import { LoginService } from "../services/login.service";

@Controller("viewer")
export class ViewerController {
    constructor(
        private getAllSeatsService: GetAllSeatsService,
        private getNumerialInfoService: GetNumerialInfoService,
        private loginService: LoginService
    ) {}

    @Get("all-seats")
    getAllSeats(): Promise<SeatDto[]> {
        return this.getAllSeatsService.execute();
    }

    @Get("numerial-info")
    async getNumberOfDelegates(): Promise<NumerialInfoDto> {
        return this.getNumerialInfoService.execute();
    }

    @Post("login")
    async login(@Body() loginData: LoginForm):Promise<LoginResponse>{
        return this.loginService.execute(loginData);
    }
}
