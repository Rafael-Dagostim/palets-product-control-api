import { UserRoleEnum } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';
import { IsPrismaEnum } from 'src/shared/decorators';

export class RegisterUserDto {
  @IsString()
  name: string;

  @IsString()
  document: string;

  @IsString()
  password: string;

  @IsPrismaEnum(UserRoleEnum)
  role: UserRoleEnum;
}
