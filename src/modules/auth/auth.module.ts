import { JwtModule } from '@nestjs/jwt';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: String(process.env.SECRET_KEY),
      signOptions: { expiresIn: '28800s' },
    }),
  ],
  providers: [
    AuthService,
    {
      provide: 'APP_GUARD',
      useClass: AuthGuard,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
