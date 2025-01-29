import { RecordStatusEnum } from '@prisma/client';
import { CreateProductionRecordDto } from './create-production-record.dto';
import { IsPrismaEnum } from 'src/shared/decorators';
import { PartialType } from '@nestjs/swagger';

export class UpdateProductionRecordDto extends PartialType(CreateProductionRecordDto) {
  /** Novo status da produção */
  @IsPrismaEnum(RecordStatusEnum)
  status?: RecordStatusEnum;
  /** Teste */
  observation?: string;
}
