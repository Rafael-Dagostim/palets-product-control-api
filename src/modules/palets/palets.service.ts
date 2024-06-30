import { Injectable } from '@nestjs/common';
import { CreatePaletDto } from './dto/create-palet.dto';
import { UpdatePaletDto } from './dto/update-palet.dto';
import { PrismaService } from 'src/core/database/database.service';

@Injectable()
export class PaletsService {
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
