import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
};

async function bootstrap() {

    Logger.log(`log db host --> ${process.env.DB_HOST}`)
    const app = await NestFactory.create(AppModule);
    app.enableCors(corsOptions);
    
    await app.listen(process.env.PORT);
}
bootstrap();
