import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users.repository';
import { User } from '../schema/users.schema';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    async getUserById(userId: string): Promise<User> {
        return this.usersRepository.findOne({ userId })
    }

    async getAllUsers(): Promise<User[]> {
        return this.usersRepository.find({});
    }

    async createUser(name: string, email: string): Promise<User> {
        return this.usersRepository.create({
            userId: uuidv4(),
            name,
            email,
            hobbies: []
        })
    }

    async findAndUpdateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
        return this.usersRepository.findOneAndUpdate({ userId }, userUpdates)
    }
}
