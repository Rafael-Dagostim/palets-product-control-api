import { ProductionRecord, RecordStatusEnum } from '@prisma/client';
import { PalletEntity } from 'src/modules/pallets/entities/pallet.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';

export class ProductionRecordEntity implements ProductionRecord {
  id: string;
  employeeId: string;
  palletId: string;
  deliveredQuantity: number;
  reformedQuantity: number;
  status: RecordStatusEnum;
  createdAt: Date;
  updatedAt: Date;

  employee: UserEntity;
  pallet: PalletEntity;

  constructor(partial: Partial<ProductionRecordEntity>) {
    const employee = partial.employee && new UserEntity(partial.employee);
    const pallet = partial.pallet && new PalletEntity(partial.pallet);

    Object.assign(this, { ...partial, employee, pallet });
  }
}
