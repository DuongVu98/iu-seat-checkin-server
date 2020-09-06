import { Injectable } from "@nestjs/common";
import { PasswordEncryptionHelper } from "../helpers/pasword-encryption.helper";
import { UserAccountRepository } from "../repositories/user-account.repo";
import { UserAccountDto } from "../dto/app.dto";

@Injectable()
export class ChangePasswordService {
    constructor(
        private userAccountRepository: UserAccountRepository,
        private passwordEncryptionHelper: PasswordEncryptionHelper
    ) {}

    async execute(accountId: string, newPassword: string): Promise<void> {
        await this.userAccountRepository.findById(accountId).then(async currentAccount => {
            if (currentAccount) {
                const salt = await this.passwordEncryptionHelper.getRandomSalt();
                const pepper = await this.passwordEncryptionHelper.getRandomPepper();
                const newhashedPassword = await this.passwordEncryptionHelper.getHashshingCode(
                    newPassword,
                    salt,
                    pepper
                );

                const newUserAccountDto = await new UserAccountDto()
                    .thisSetId(accountId)
                    .thisSetUsername(currentAccount.username)
                    .thisSetPassword(newhashedPassword)
                    .thisSetSalt(salt);

                this.userAccountRepository.updateAccount(newUserAccountDto.id, newUserAccountDto);
            }
        });
    }
}
