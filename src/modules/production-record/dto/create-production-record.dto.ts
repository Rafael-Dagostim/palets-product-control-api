import { $Enums } from '@prisma/client';

export class CreateProductionRecordDto {
  employeeId: string;
  paletId: string;
  deliveredQuantity: number;
  reformedQuantity: number;
  status: $Enums.RecordStatus;
}
