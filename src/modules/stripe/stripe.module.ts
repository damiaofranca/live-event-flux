import { StripeController } from './stripe.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [StripeController],
  exports: [StripeService],
  providers: [StripeService],
})
export class StripeModule {}
