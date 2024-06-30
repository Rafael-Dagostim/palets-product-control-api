import { $Enums, User } from '@prisma/client';

export class UserEntity implements User {
  id: string;
  name: string;
  document: string;
  password: string;
  role: $Enums.UserRole;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
