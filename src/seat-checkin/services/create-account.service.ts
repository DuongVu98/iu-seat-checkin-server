import { Injectable, Logger } from "@nestjs/common";
import { UserAccountRepository } from "../repositories/user-account.repo";
import { UserAccountDto, CreateAccountForm } from "../dto/app.dto";
import Crypto = require("crypto-js");

@Injectable()
export class CreateAccountService {
    private saltLength = 6;

    private logger: Logger = new Logger("CreateAccountService");

    constructor(private userAccountRepository: UserAccountRepository) {}

    async execute(newUserAccountForm: CreateAccountForm): Promise<void> {
        const salt = await this.getRandomSalt();
        const pepper = await this.getRandomPepper();

        const passwordToHashing = await newUserAccountForm.password.concat(salt).concat(pepper);
        const hashCode = await this.getHashingCode(passwordToHashing);

        const newUserAccountDto = await new UserAccountDto()
            .thisSetUsername(newUserAccountForm.username)
            .thisSetPassword(hashCode)
            .thisSetSalt(salt);

        this.userAccountRepository.createAccount(newUserAccountDto);
    }

    getRandomSalt(): string {
        return Math.random()
            .toString(36)
            .substring(this.saltLength + 1);
    }

    getHashingCode(origin: string): string {
        return Crypto.SHA256(origin).toString();
    }

    getRandomPepper(): string {
        const fullBoard = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

        const randomNumber = Math.floor(Math.random() * Math.floor(fullBoard.length));
        return fullBoard.charAt(randomNumber);
    }
}
