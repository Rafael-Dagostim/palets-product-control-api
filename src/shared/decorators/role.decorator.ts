import { CustomDecorator, SetMetadata } from '@nestjs/common';
import { $Enums } from '@prisma/client';

export const ROLE_AUTH = 'roleAuthorized';
export const Roles = (...roles: $Enums.UserRole[]): CustomDecorator<string> =>
  SetMetadata(ROLE_AUTH, roles);
