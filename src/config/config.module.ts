import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

const config = {
    envFilePath: "../../env/.development.env"
}

@Module({
    imports: [ConfigModule.forRoot(config)],
})
export class AppConfig {}
