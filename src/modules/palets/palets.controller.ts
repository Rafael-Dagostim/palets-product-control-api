import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaletsService } from './palets.service';
import { CreatePaletDto } from './dto/create-palet.dto';
import { UpdatePaletDto } from './dto/update-palet.dto';

@Controller('palets')
export class PaletsController {
  constructor(private readonly paletsService: PaletsService) {}

  @Post()
  create(@Body() createPaletDto: CreatePaletDto) {
    return this.paletsService.create(createPaletDto);
  }

  @Get()
  findAll() {
    return this.paletsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paletsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaletDto: UpdatePaletDto) {
    return this.paletsService.update(id, updatePaletDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paletsService.remove(id);
  }
}
