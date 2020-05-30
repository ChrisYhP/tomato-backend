import { Controller, Get, Req, Request, UseGuards, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport'
import { AuthService }  from './auth/auth.service'
import { PhotoService } from "./photo/photo.service";
import { Photo } from './photo/photo.entity';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    private readonly photoService: PhotoService
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
  
  @Get('name')
  getName(): string {
    return this.appService.getName();
  }

  @Get('photo')
  getPhoto(): Promise<Photo[]> {
    return this.photoService.findAll();
  }
}
