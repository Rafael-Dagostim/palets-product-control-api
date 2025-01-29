import { $Enums, UserRoleEnum } from '@prisma/client';

export type JwtUserData = {
  userId: string;
  role: UserRoleEnum;
};
