import { Controller, Logger, Post, Body, UseGuards, Get } from "@nestjs/common";
import { ChangePasswordForm, CreateAccountForm } from "../dto/app.dto";
import { ChangePasswordService } from "../services/change-password.service";
import { SecureGuard } from "../guards/secure.guard";
import { CreateAccountService } from "../services/create-account.service";

@Controller("secret")
@UseGuards(SecureGuard)
export class SecureController {
    logger: Logger = new Logger("SecureController");

    constructor(
        private changePasswordService: ChangePasswordService,
        private createAccountService: CreateAccountService
    ) {}

    @Post("change-password")
    async changePassword(@Body() data: ChangePasswordForm): Promise<void> {
        return this.changePasswordService.execute(data.accountId, data.newPassword);
    }

    @Post("new-account")
    async createNewAccount(@Body() data: CreateAccountForm): Promise<void> {
        return this.createAccountService.execute(data);
    }

    @Get("test-num-env")
    async testNumEnv(): Promise<any> {
        const num = process.env.AVAILABLE_DELEGATES_AMOUNT;
        return {
            num: parseInt(num, 10) + 1,
        };
    }
}
