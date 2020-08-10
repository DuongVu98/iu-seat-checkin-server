import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class SeatModel extends Document {
    @Prop()
    delegateCode: string;

    @Prop()
    row: number;

    @Prop()
    column: number;

    setDelegateCode(code: string): SeatModel {
        this.delegateCode = code;
        return this;
    }
    setRow(row: number): SeatModel {
        this.row = row;
        return this;
    }
    setColumn(column: number): SeatModel {
        this.column = column;
        return this;
    }
}

export const SeatSchema = SchemaFactory.createForClass(SeatModel);
