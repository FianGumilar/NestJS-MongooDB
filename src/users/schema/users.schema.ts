import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = Document & User;

@Schema()
export class User {
    
    @Prop()
    userId: string;

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop([String])
    hobbies: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);