import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from './repository/index.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { StripeService } from '../stripe/stripe.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private stripeService: StripeService,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    const verifiedUser = await this.findByEmail(user.email);
    const stripeCustomer = await this.stripeService.createCustomer(
      user.nickname,
      user.email,
    );

    if (verifiedUser)
      throw new ConflictException('Already exist an user with this email.');

    user.password = bcrypt.hashSync(
      user.password,
      Number(process.env.SALT_PASSWORD),
    );
    user.stripeCustomerId = stripeCustomer.id;

    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.findAndCount();
  }

  async findOneById(id: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async findOne(nickname: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: {
        nickname,
      },
    });
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOneById(id);

    if (!user) throw new NotFoundException('User not found.');

    if ('password' in updateUserDto) delete updateUserDto.password;

    return this.userRepository.merge(user, updateUserDto);
  }

  async remove(id: string) {
    const user = await this.findOneById(id);

    if (!user) throw new NotFoundException('User not found.');

    return this.userRepository.delete(user.id);
  }
}
