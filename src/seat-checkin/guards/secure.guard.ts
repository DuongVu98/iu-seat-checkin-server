import { Injectable, CanActivate, ExecutionContext, Logger } from "@nestjs/common";
import { Observable } from "rxjs";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class SecureGuard implements CanActivate {
    logger: Logger = new Logger("AuthGuard");

    constructor(private configService: ConfigService) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        if (request.headers.key){
            if (request.headers.key === this.configService.get<string>("ADMIN_KEY")) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}
