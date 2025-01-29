import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { compare, genSalt, hash } from 'bcrypt';
import { PrismaService } from 'src/core/database/database.service';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { LoginResponse } from './dto/login-response.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtUserData } from './types/jwt-user-data.type';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserService } from 'src/modules/user/user.service';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  private readonly passwordPepper: string;
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    config: ConfigService,
  ) {
    this.passwordPepper = config.getOrThrow('PWD_PEPPER');
  }

  async login(dto: LoginDto): Promise<LoginResponse> {
    const user = await this.prisma.user.findUnique({ where: { document: dto.document } });

    if (!user) throw new NotFoundException(null, 'Usuário ou senha incorretos!');

    const hashPassword = await hash(dto.password, `${user.salt}${this.passwordPepper}`);
    const passwordMatch = await compare(hashPassword, user.password);

    if (!passwordMatch) throw new NotFoundException(null, 'Usuário ou senha incorretos!');

    const jwtContent: JwtUserData = {
      userId: user.id,
      role: user.role,
    };

    return {
      user: new UserEntity(user),
      token: this.jwtService.sign(jwtContent),
      refresh: this.jwtService.sign(jwtContent, { expiresIn: '7d' }),
    };
  }

  async register(dto: RegisterUserDto): Promise<void> {
    const salt = await genSalt(14);

    const hashPassword = await hash(dto.password, `${salt}${this.passwordPepper}`);

    const user: CreateUserDto = { ...dto, password: hashPassword, salt };

    await this.userService.create(user);
  }
}
