import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { SeatModel } from "./seat.model";

@Schema()
export class SeatListModel extends Document {
    @Prop()
    seats: SeatModel[];
}

export const SeatListSchema = SchemaFactory.createForClass(SeatListModel);
