import { Controller, Get } from "@nestjs/common";

@Controller("config")
export class ConfigController {
    @Get("testport")
    getPort(): string {
        return process.env.PORT;
    }
}
