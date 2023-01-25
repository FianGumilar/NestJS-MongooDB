import { Controller, Get, Param, Post, Body, Patch } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { User } from '../schema/users.schema';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.usersService.getAllUsers()
    }

    @Get(':id')
    async getUserById(@Param('userId') userId: string): Promise<User> {
        return this.usersService.getUserById(userId);
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.createUser(createUserDto.email, createUserDto.name);
    } 

    @Patch(':id')
    async updateUser(@Param('userId') userId: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.usersService.findAndUpdateUser(userId, updateUserDto);
    }
}
