import { $Enums } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  document: string;

  @IsString()
  password: string;

  @IsEnum($Enums.UserRole)
  role: $Enums.UserRole;
}
