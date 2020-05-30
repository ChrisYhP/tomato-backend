import {Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response} from 'express'

@Injectable()
export class LoggerMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('request ....')
    next()
  }
}