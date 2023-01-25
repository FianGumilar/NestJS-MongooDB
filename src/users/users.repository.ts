import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, FilterQuery } from "mongoose";
import { User, UserDocument } from "./schema/users.schema";

@Injectable()
export class UsersRepository {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async findOne(userFilterQuery: FilterQuery<User>): Promise<User> {
        return this.userModel.findOne(userFilterQuery)
    }

    async find(userFilterQuery: FilterQuery<User>): Promise<User[]> {
        return this.userModel.find(userFilterQuery)
    }

    async create(user: User): Promise<User> {
        const newUser = new this.userModel(user);
        return newUser.save();
    }

    async findOneAndUpdate(userFilterQuery: FilterQuery<User>, user: Partial<User>): Promise<User> {
        return this.userModel.findOneAndUpdate(userFilterQuery, user);
    }
}