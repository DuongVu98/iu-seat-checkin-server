import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class SeatModel extends Document {
    @Prop()
    delegateCode: string;

    setDelegateCode(code: string): SeatModel {
        this.delegateCode = code;
        return this;
    }
}

export const SeatSchema = SchemaFactory.createForClass(SeatModel);
