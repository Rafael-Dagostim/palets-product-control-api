import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
