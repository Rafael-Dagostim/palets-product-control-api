import { Injectable } from '@nestjs/common';
import { CreatePaletDto } from './dto/create-palet.dto';
import { UpdatePaletDto } from './dto/update-palet.dto';
import { PrismaService } from 'src/core/database/database.service';

@Injectable()
export class PaletsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreatePaletDto) {
    return this.prisma.palet.create({ data: dto });
  }

  findAll() {
    return this.prisma.palet.findMany();
  }

  findOne(id: string) {
    return this.prisma.palet.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdatePaletDto) {
    return this.prisma.palet.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.palet.delete({ where: { id } });
  }
}
