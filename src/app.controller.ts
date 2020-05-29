import { Controller, Get, Req, Body, Param, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express'

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('name')
  getName(@Query('id') id: string, @Res() res: Response): string {
    return this.appService.getName();
  }
}
