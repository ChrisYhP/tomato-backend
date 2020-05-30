import { Controller, Get, Req, Request, Body, Param, Query, Res, HttpException, HttpStatus, UseFilters, UseGuards, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport'
import { AuthService }  from './auth/auth.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) {}
  
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('name')
  getName(): string {
    return this.appService.getName();
  }
}
