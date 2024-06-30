import { Palet } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

export class PaletEntity implements Palet {
  id: string;
  name: string;
  version: number;
  buyCost: Decimal;
  productionCost: Decimal;
  sellPrice: Decimal;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<PaletEntity>) {
    Object.assign(this, partial);
  }
}
