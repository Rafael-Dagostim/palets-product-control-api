import { UserRoleEnum } from '@prisma/client';

export class CreateUserDto {
  name: string;
  document: string;
  role: UserRoleEnum;

  password: string;
  salt: string;
}
