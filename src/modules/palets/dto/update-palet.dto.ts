import { PartialType } from '@nestjs/mapped-types';
import { CreatePaletDto } from './create-palet.dto';

export class UpdatePaletDto extends PartialType(CreatePaletDto) {}
