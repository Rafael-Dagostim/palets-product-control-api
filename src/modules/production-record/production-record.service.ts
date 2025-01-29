import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/database/database.service';
import { CreateProductionRecordDto } from './dto/create-production-record.dto';
import { UpdateProductionRecordDto } from './dto/update-production-record.dto';
import { $Enums, RecordStatusEnum } from '@prisma/client';
import { UserEntity } from '../user/entities/user.entity';
import { JwtUserData } from 'src/auth/types/jwt-user-data.type';

@Injectable()
export class ProductionRecordService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.productionRecord.findMany();
  }

  findOne(id: string) {
    return this.prisma.productionRecord.findUnique({ where: { id } });
  }

  async create(dto: CreateProductionRecordDto, user: JwtUserData) {
    const productionRecord = await this.prisma.productionRecord.create({
      data: {
        ...dto,
        status: RecordStatusEnum.OPEN,
        history: {
          create: {
            observation: 'Novo Registro criado',
            status: RecordStatusEnum.OPEN,
            changedBy: { connect: { id: user.userId } },
          },
        },
      },
    });
  }

  update(id: string, dto: UpdateProductionRecordDto, user: JwtUserData) {
    const { observation, status, ...rest } = dto;

    return this.prisma.productionRecord.update({
      where: { id },
      data: {
        ...rest,
        status,
        history: {
          create: {
            observation,
            status,
            changedBy: { connect: { id: user.userId } },
          },
        },
      },
    });
  }

  remove(id: string) {
    return this.prisma.productionRecord.delete({ where: { id } });
  }
}
