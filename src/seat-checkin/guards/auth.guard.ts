import { Injectable, CanActivate, ExecutionContext, Logger } from "@nestjs/common";
import { Observable } from "rxjs";
import { UserAccountRepository } from "../repositories/user-account.repo";

@Injectable()
export class AdminAuthGuard implements CanActivate {
    logger: Logger = new Logger("AuthGuard");

    constructor(private userAccountRepository: UserAccountRepository) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        if (request.headers.user) {
            this.userAccountRepository.findById(request.headers.user).then(account => {
                if (account) {
                    return true;
                } else {
                    return false;
                }
            });
        } else {
            return false;
        }
    }
}
