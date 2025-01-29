import { IsString } from 'class-validator';

export class LoginDto {
  document: string;

  password: string;
}
