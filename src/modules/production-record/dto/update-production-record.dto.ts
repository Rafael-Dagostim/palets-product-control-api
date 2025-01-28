import { PartialType } from '@nestjs/mapped-types';
import { CreateProductionRecordDto } from './create-production-record.dto';
import { $Enums } from '@prisma/client';

export class UpdateProductionRecordDto extends PartialType(CreateProductionRecordDto) {
  status?: $Enums.RecordStatus;
  observation?: string;
}
