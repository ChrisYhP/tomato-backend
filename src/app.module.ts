import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    AuthModule, 
    UsersModule,
    PhotoModule,
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule{}
