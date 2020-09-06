import { Injectable } from "@nestjs/common";
import { LoginForm, UserAccountDto, LoginResponse } from "../dto/app.dto";
import { UserAccountRepository } from "../repositories/user-account.repo";
import { PasswordEncryptionHelper } from "../helpers/pasword-encryption.helper";

@Injectable()
export class LoginService {
    loginResponse: LoginResponse = {};

    constructor(
        private passwordEncryptionHelper: PasswordEncryptionHelper,
        private userAccountRepository: UserAccountRepository
    ) {}

    async execute(data: LoginForm): Promise<LoginResponse> {
        return await this.userAccountRepository.findByUsername(data.username).then(async account => {
            let isValid = false;
            if (account) {
                const fullBoard = this.passwordEncryptionHelper.getFullBoard();

                for (let i = 0; i < 52; i++) {
                    const pepper = fullBoard.charAt(i);
                    const hashOutput = await this.passwordEncryptionHelper.getHashshingCode(
                        data.password,
                        account.salt,
                        pepper
                    );

                    if (hashOutput === account.password) {
                        isValid = true;
                        break;
                    }
                }
                this.loginResponse.account = (await isValid)
                    ? new UserAccountDto().thisSetId(account._id).thisSetUsername(account.username)
                    : null;
                this.loginResponse.isValidInput = await isValid;
                return this.loginResponse;
            } else {
                this.loginResponse.account = await null;
                this.loginResponse.isValidInput = await false;
                return this.loginResponse;
            }
        });
    }
}
