import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [ 
    UserModule,
    PhotoModule,
    TypeOrmModule.forRoot()
  ],
  controllers: [],
  providers: [],
})
export class AppModule{}
