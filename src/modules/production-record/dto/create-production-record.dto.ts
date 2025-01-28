import { $Enums } from '@prisma/client';

export class CreateProductionRecordDto {
  employeeId: string;
  palletId: string;
  deliveredQuantity: number;
  reformedQuantity: number;
}
