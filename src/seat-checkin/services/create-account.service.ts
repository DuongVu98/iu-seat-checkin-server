import { Injectable, Logger } from "@nestjs/common";
import { UserAccountRepository } from "../repositories/user-account.repo";
import { UserAccountDto, CreateAccountForm } from "../dto/app.dto";
import { PasswordEncryptionHelper } from "../helpers/pasword-encryption.helper";

@Injectable()
export class CreateAccountService {
    private logger: Logger = new Logger("CreateAccountService");

    constructor(
        private passwordEncryptionHelper: PasswordEncryptionHelper,
        private userAccountRepository: UserAccountRepository
    ) {}

    async execute(newUserAccountForm: CreateAccountForm): Promise<void> {
        const salt = await this.passwordEncryptionHelper.getRandomSalt();
        const pepper = await this.passwordEncryptionHelper.getRandomPepper();
        const newPassword = await this.passwordEncryptionHelper.getHashshingCode(
            newUserAccountForm.password,
            salt,
            pepper
        );

        const newUserAccountDto = await new UserAccountDto()
            .thisSetUsername(newUserAccountForm.username)
            .thisSetPassword(newPassword)
            .thisSetSalt(salt);

        this.userAccountRepository.createAccount(newUserAccountDto);
    }
}
