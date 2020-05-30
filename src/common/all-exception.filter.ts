import { Catch, ExceptionFilter, ArgumentsHost, HttpException, HttpStatus, Logger } from "@nestjs/common";


@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const request = ctx.getRequest()
    const response = ctx.getResponse()
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR

    const message = exception.message.message;
    new Logger('错误提示', message);
    const errResponse = {
      data: {
        error: message
      },
      message: '请求失败',
      code: 1,
      statusCode: status,
      url: request.url
    }
    response.status(status)
    .json(errResponse)
  }
}