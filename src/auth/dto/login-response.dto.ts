import { UserEntity } from 'src/modules/user/entities/user.entity';

export class LoginResponse {
  user: UserEntity;
  token: string;
  refresh: string;
}
