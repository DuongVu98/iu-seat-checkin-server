import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
};

async function bootstrap() {

    const app = await NestFactory.create(AppModule);
    app.enableCors(corsOptions);
    
    await app.listen(process.env.PORT);
}
bootstrap();
