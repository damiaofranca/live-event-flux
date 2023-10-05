import { Body, Controller, Post, Req } from '@nestjs/common';
import { CreateChargeDto } from './dto/create-charge-dto';
import { StripeService } from './stripe.service';

@Controller('charge')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post()
  async createCharge(@Body() charge: CreateChargeDto, @Req() request: any) {
    await this.stripeService.charge(
      charge.amount,
      charge.paymentMethodId,
      request.user.stripeCustomerId,
    );
  }
}
