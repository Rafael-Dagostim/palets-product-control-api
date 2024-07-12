import { $Enums } from '@prisma/client';

export type JwtContent = {
  userId: string;
  role: $Enums.UserRole;
};
