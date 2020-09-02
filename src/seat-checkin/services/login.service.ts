import { Injectable, Logger } from "@nestjs/common";
import { LoginForm } from "../dto/app.dto";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class LoginService {
    constructor(private configService: ConfigService) {}

    async execute(data: LoginForm): Promise<boolean> {
        const adminUsername = await this.configService.get<string>("ADMIN_USERNAME");
        const adminPassword = await this.configService.get<string>("ADMIN_PASSWORD");

        Logger.log(`input data: ${data.username} - ${data.password}`);
        if (data.username === adminUsername && data.password === adminPassword) {
            return true;
        } else {
            return false;
        }
    }
}
