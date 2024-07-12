import { $Enums, User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  id: string;
  name: string;
  document: string;
  role: $Enums.UserRole;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  @Exclude()
  password: string;
  @Exclude()
  salt: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
