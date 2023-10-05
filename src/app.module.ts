import { StripeModule } from './modules/stripe/stripe.module';
import { AuthModule } from './modules/auth/auth.module';
import { Module } from '@nestjs/common';
import * as Joi from '@hapi/joi';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    StripeModule,
    DatabaseModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        STRIPE_SECRET_KEY: Joi.string(),
        STRIPE_CURRENCY: Joi.string(),
        FRONTEND_URL: Joi.string(),
      }),
    }),
  ],
})
export class AppModule {}
