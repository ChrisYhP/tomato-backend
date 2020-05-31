import { Controller, Post, Body, Get, HttpException, Req, Header, ValidationPipe, UsePipes } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() userInfo: CreateUserDto) {
    return await this.userService.create(userInfo)
  }
  
  @Post('login')
  login(@Body() body: LoginUserDto) {

  }
}
