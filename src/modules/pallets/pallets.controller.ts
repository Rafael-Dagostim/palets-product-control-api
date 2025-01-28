import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PalletsService } from './pallets.service';
import { CreatePalletDto } from './dto/create-pallet.dto';
import { UpdatePalletDto } from './dto/update-pallet.dto';

@Controller('pallets')
export class PalletsController {
  constructor(private readonly palletsService: PalletsService) {}

  @Post()
  create(@Body() dto: CreatePalletDto) {
    return this.palletsService.create(dto);
  }

  @Get()
  findAll() {
    return this.palletsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.palletsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePalletDto) {
    return this.palletsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.palletsService.remove(id);
  }
}
