import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './core/database/database.module';
import { PalletsModule } from './modules/pallets/pallets.module';
import { ProductionRecordModule } from './modules/production-record/production-record.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    DatabaseModule,
    PalletsModule,
    ProductionRecordModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
