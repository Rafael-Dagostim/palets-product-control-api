import { Module } from '@nestjs/common';
import { ProductionRecordService } from './production-record.service';
import { ProductionRecordController } from './production-record.controller';

@Module({
  controllers: [ProductionRecordController],
  providers: [ProductionRecordService],
})
export class ProductionRecordModule {}
