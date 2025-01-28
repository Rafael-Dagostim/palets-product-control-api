import { Injectable } from '@nestjs/common';
import { CreatePalletDto } from './dto/create-pallet.dto';
import { UpdatePalletDto } from './dto/update-pallet.dto';
import { PrismaService } from 'src/core/database/database.service';

@Injectable()
export class PalletsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreatePalletDto) {
    return this.prisma.pallet.create({ data: dto });
  }

  findAll() {
    return this.prisma.pallet.findMany();
  }

  findOne(id: string) {
    return this.prisma.pallet.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdatePalletDto) {
    return this.prisma.pallet.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.pallet.delete({ where: { id } });
  }
}
