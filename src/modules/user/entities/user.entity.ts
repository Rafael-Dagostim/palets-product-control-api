import { ApiHideProperty } from '@nestjs/swagger';
import { User, UserRoleEnum } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { IsPrismaEnum } from 'src/shared/decorators';

export class UserEntity implements User {
  id: string;
  name: string;
  document: string;

  @IsPrismaEnum(UserRoleEnum)
  role: UserRoleEnum;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  @Exclude()
  @ApiHideProperty()
  password: string;
  @Exclude()
  @ApiHideProperty()
  salt: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
