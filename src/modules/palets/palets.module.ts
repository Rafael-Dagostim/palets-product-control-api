import { Module } from '@nestjs/common';
import { PaletsService } from './palets.service';
import { PaletsController } from './palets.controller';

@Module({
  controllers: [PaletsController],
  providers: [PaletsService],
})
export class PaletsModule {}
