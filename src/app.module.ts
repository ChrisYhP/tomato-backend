import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LangController } from './lang/lang.controller';
import { LangService } from './lang/lang.service';
import { LangModule } from './lang/lang.module';

@Module({
  imports: [ 
    UserModule,
    TypeOrmModule.forRoot(),
    LangModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule{}
