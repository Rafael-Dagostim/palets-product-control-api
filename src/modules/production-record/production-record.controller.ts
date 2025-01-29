import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductionRecordService } from './production-record.service';
import { CreateProductionRecordDto } from './dto/create-production-record.dto';
import { UpdateProductionRecordDto } from './dto/update-production-record.dto';
import { User } from 'src/shared/decorators';
import { JwtUserData } from 'src/auth/types/jwt-user-data.type';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('production-record')
@ApiBearerAuth()
export class ProductionRecordController {
  constructor(private readonly productionRecordService: ProductionRecordService) {}

  @Get()
  findAll() {
    return this.productionRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productionRecordService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateProductionRecordDto, @User() user: JwtUserData) {
    return this.productionRecordService.create(dto, user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateProductionRecordDto,
    @User() user: JwtUserData,
  ) {
    return this.productionRecordService.update(id, dto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productionRecordService.remove(id);
  }
}
