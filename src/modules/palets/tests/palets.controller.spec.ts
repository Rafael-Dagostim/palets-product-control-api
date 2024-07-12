import { Test, TestingModule } from '@nestjs/testing';
import { PaletsController } from './palets.controller';
import { PaletsService } from './palets.service';

describe('PaletsController', () => {
  let controller: PaletsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaletsController],
      providers: [PaletsService],
    }).compile();

    controller = module.get<PaletsController>(PaletsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
