import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductionRecordService } from './production-record.service';
import { CreateProductionRecordDto } from './dto/create-production-record.dto';
import { UpdateProductionRecordDto } from './dto/update-production-record.dto';

@Controller('production-record')
export class ProductionRecordController {
  constructor(private readonly productionRecordService: ProductionRecordService) {}

  @Post()
  create(@Body() createProductionRecordDto: CreateProductionRecordDto) {
    return this.productionRecordService.create(createProductionRecordDto);
  }

  @Get()
  findAll() {
    return this.productionRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productionRecordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductionRecordDto: UpdateProductionRecordDto) {
    return this.productionRecordService.update(+id, updateProductionRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productionRecordService.remove(+id);
  }
}
