import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/database/database.service';
import { CreateProductionRecordDto } from './dto/create-production-record.dto';
import { UpdateProductionRecordDto } from './dto/update-production-record.dto';

@Injectable()
export class ProductionRecordService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.productionRecord.findMany();
  }

  findOne(id: string) {
    return this.prisma.productionRecord.findUnique({ where: { id } });
  }

  create(dto: CreateProductionRecordDto) {
    return this.prisma.productionRecord.create({ data: dto });
  }

  update(id: string, dto: UpdateProductionRecordDto) {
    return this.prisma.productionRecord.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.productionRecord.delete({ where: { id } });
  }
}
