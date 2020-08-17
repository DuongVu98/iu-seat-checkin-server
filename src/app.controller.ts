import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get("test-env")
    getEnv(): string {
        return process.env.DB_HOST;
    }

    @Get("test-env-2")
    getEnv2(): string {
        return process.env.PORT;
    }
}
