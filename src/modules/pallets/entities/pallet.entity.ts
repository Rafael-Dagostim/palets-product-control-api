import { Pallet } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

export class PalletEntity implements Pallet {
  id: string;
  name: string;
  version: number;
  buyCost: Decimal;
  productionCost: Decimal;
  sellPrice: Decimal;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<PalletEntity>) {
    Object.assign(this, partial);
  }
}
