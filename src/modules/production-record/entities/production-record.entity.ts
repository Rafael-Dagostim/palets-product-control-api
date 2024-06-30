import { $Enums, ProductionRecord } from '@prisma/client';
import { PaletEntity } from 'src/modules/palets/entities/palet.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';

export class ProductionRecordEntity implements ProductionRecord {
  id: string;
  employeeId: string;
  paletId: string;
  deliveredQuantity: number;
  reformedQuantity: number;
  status: $Enums.RecordStatus;
  createdAt: Date;
  updatedAt: Date;

  employee: UserEntity;
  palet: PaletEntity;

  constructor(partial: Partial<ProductionRecordEntity>) {
    const employee = partial.employee && new UserEntity(partial.employee);
    const palet = partial.palet && new PaletEntity(partial.palet);

    Object.assign(this, { ...partial, employee, palet });
  }
}
