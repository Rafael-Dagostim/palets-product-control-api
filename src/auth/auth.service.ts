import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { compare, hash } from 'bcrypt';
import { PrismaService } from 'src/core/database/database.service';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { LoginResponse } from './dto/login-response.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtContent } from './types/jwt-content.type';

@Injectable()
export class AuthService {
  private readonly passwordPepper: string;
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
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

    const jwtContent: JwtContent = {
      userId: user.id,
      role: user.role,
    };

    return {
      user: new UserEntity(user),
      token: this.jwtService.sign(jwtContent),
      refresh: this.jwtService.sign(jwtContent, { expiresIn: '7d' }),
    };
  }
}
