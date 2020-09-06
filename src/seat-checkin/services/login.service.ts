import { Injectable, Logger } from "@nestjs/common";
import { LoginForm } from "../dto/app.dto";
import { ConfigService } from "@nestjs/config";
import { UserAccountRepository } from "../repositories/user-account.repo";
import Crypto = require("crypto-js");

@Injectable()
export class LoginService {
    constructor(private configService: ConfigService, private userAccountRepository: UserAccountRepository) {}

    async execute(data: LoginForm): Promise<boolean> {
        return await this.userAccountRepository.findByUsername(data.username).then(async account => {
            let isValid = false;
            if (account) {
                const fullBoard = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

                for (let i = 0; i < 52; i++) {
                    const pepper = fullBoard.charAt(i);
                    const hashOutput = await this.testHashshingCode(data.password, account.salt, pepper);

                    if (hashOutput === account.password) {
                        isValid = true;
                        break;
                    }
                }
                return isValid;
            } else {
                return false;
            }
        });
    }

    testHashshingCode(password: string, salt: string, pepper: string): string {
        return this.getHashingCode(password.concat(salt).concat(pepper));
    }

    getHashingCode(origin: string): string {
        return Crypto.SHA256(origin).toString();
    }
}
