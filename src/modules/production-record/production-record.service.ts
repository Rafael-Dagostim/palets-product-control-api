import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/database/database.service';

@Injectable()
export class ProductionRecordService {
  constructor(private readonly prismaService: PrismaService) {}

  create(dto: CreatePaletDto) {
    return this.prismaService.palet.create({ data: dto });
  }

  findAll() {
    return this.prismaService.palet.findMany();
  }

  findOne(id: string) {
    return this.prismaService.palet.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdatePaletDto) {
    return this.prismaService.palet.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prismaService.palet.delete({ where: { id } });
  }
}
