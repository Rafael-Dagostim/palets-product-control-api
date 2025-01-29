import { CustomDecorator, SetMetadata } from '@nestjs/common';
import { UserRoleEnum } from '@prisma/client';

export const ROLE_AUTH = 'roleAuthorized';
export const Roles = (...roles: UserRoleEnum[]): CustomDecorator<string> =>
  SetMetadata(ROLE_AUTH, roles);
