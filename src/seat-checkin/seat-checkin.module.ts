import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { SeatSchema } from "./models/seat.model";
import { SeatRepository } from "./repositories/seat.repo";
import { AddSeatService } from "./services/add-seat.service";
import { AdminController } from "./api/admin.controller";
import { ViewerController } from "./api/viewer.controller";
import { GetAllSeatsService } from "./services/get-all-seats.service";
import { UpdateSeatService } from "./services/update-seat.service";
import { DeleteSeatCodeService } from "./services/delete-seat.service";
import { SetOccupiedService } from "./services/set-occupied.service";
import { WsGateway } from "./gateways/ws.gateway";
import { SeatOccupiedGateway } from "./gateways/seat-occupied.gateway";
import { GetNumerialInfoService } from "./services/get-numerial-info.service";
import { LoginService } from "./services/login.service";
import { AppConfig } from "../config/config.module";
import { UserAccountSchema } from "./models/user-account.model";
import { CreateAccountService } from "./services/create-account.service";
import { UserAccountRepository } from "./repositories/user-account.repo";
import { PasswordEncryptionHelper } from "./helpers/pasword-encryption.helper";
import { ChangePasswordService } from "./services/change-password.service";
import { SecureController } from "./api/secure.controller";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: "seats", schema: SeatSchema },
            { name: "user_accounts", schema: UserAccountSchema },
        ]),
        AppConfig,
    ],
    controllers: [AdminController, ViewerController, SecureController],
    providers: [
        SeatRepository,
        UserAccountRepository,
        AddSeatService,
        GetAllSeatsService,
        UpdateSeatService,
        DeleteSeatCodeService,
        SetOccupiedService,
        GetNumerialInfoService,
        CreateAccountService,
        ChangePasswordService,
        LoginService,
        WsGateway,
        SeatOccupiedGateway,
        PasswordEncryptionHelper,
    ],
})
export class SeatCheckinModule {}
