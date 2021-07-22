import { HttpModule, Module } from '@nestjs/common';
import { LangController } from './lang.controller';
import { LangService } from './lang.service';

@Module({
  imports: [
    HttpModule
  ],
  providers: [LangService],
  controllers: [LangController]
})
export class LangModule {}
