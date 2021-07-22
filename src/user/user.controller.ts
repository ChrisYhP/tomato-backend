import { Controller, Post, Body, Get, HttpException, Req, Header, ValidationPipe, UsePipes, UseGuards } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() userInfo: CreateUserDto) {
    return await this.userService.create(userInfo)
  }
  
  @Post('login')
  async login(@Body() userInfo: LoginUserDto) {
    return await this.userService.login(userInfo)
  }

  @Get('test')
  async test() {
    return 'test'
  }

}
