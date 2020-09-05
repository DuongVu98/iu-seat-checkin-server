import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class UserAccountModel extends Document {
    
    @Prop()
    username: string;

    @Prop()
    password: string;

    @Prop()
    salt: string;

    setUsername(username: string): UserAccountModel {
        this.username = username;
        return this;
    }

    setPassword(password: string): UserAccountModel {
        this.password = password;
        return this;
    }

    setSalt(salt: string): UserAccountModel {
        this.salt = salt;
        return this;
    }
}

export const UserAccountSchema = SchemaFactory.createForClass(UserAccountModel);
