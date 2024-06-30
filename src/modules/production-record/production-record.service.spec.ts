import { Test, TestingModule } from '@nestjs/testing';
import { ProductionRecordService } from './production-record.service';

describe('ProductionRecordService', () => {
  let service: ProductionRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductionRecordService],
    }).compile();

    service = module.get<ProductionRecordService>(ProductionRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
