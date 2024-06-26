import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/core/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  create(dto: CreateUserDto) {
    return this.prismaService.user.create({ data: dto });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: string) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateUserDto) {
    return this.prismaService.user.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prismaService.user.update({ where: { id }, data: { deletedAt: new Date() } });
  }
}
