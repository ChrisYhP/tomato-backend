import { Test, TestingModule } from '@nestjs/testing';
import { LangController } from './lang.controller';

describe('Lang Controller', () => {
  let controller: LangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LangController],
    }).compile();

    controller = module.get<LangController>(LangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
