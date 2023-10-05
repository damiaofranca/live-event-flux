import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateChargeDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;
  @IsUUID()
  @IsNotEmpty()
  paymentMethodId: string;
  @IsUUID()
  @IsNotEmpty()
  customerId: string;
}
