import { Test, TestingModule } from '@nestjs/testing';
import { ProductionRecordController } from './production-record.controller';
import { ProductionRecordService } from './production-record.service';

describe('ProductionRecordController', () => {
  let controller: ProductionRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductionRecordController],
      providers: [ProductionRecordService],
    }).compile();

    controller = module.get<ProductionRecordController>(ProductionRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
