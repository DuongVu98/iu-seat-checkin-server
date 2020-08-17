import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ConfigController } from "./config.controller";

const config = {
    envFilePath: `src/env/.${process.env.NODE_ENV}.env`
}

@Module({
    controllers: [ConfigController],
    imports: [ConfigModule.forRoot(config)],
    providers: [ConfigService],
    exports: [ConfigService]
})
export class AppConfig {}
