import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/all-exception.filter';
import { TransformInterceptor } from './common/transform.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局错误处理
  app.useGlobalFilters(new AllExceptionsFilter())
  // 全局校验
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  // 全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor())
  await app.listen(3000);
}
bootstrap();
