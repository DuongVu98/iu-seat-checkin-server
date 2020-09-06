import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserAccountModel } from "../models/user-account.model";
import { UserAccountDto } from "../dto/app.dto";

@Injectable()
export class UserAccountRepository {
    constructor(@InjectModel("user_accounts") private userAccoutModel: Model<UserAccountModel>) {}

    async createAccount(accountDto: UserAccountDto): Promise<UserAccountModel> {
        const newAccount = new this.userAccoutModel(accountDto);
        return newAccount.save();
    }

    async findById(id: string): Promise<UserAccountModel> {
        return this.userAccoutModel.findById(id);
    }

    async findByUsername(username: string): Promise<UserAccountModel> {
        return this.userAccoutModel.findOne({ username: username });
    }

    async updateAccount(id: string, newAccountDto: UserAccountDto): Promise<UserAccountModel> {
        return this.userAccoutModel.findByIdAndUpdate(id, newAccountDto, { new: true });
    }

    async deleteAccount(id: string): Promise<any> {
        return this.userAccoutModel.findByIdAndRemove(id);
    }
}
