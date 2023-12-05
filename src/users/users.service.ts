import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    // const user = await this.userRepository.findOne({
    //   where: {
    //
    //   },
    // });
    const user = {};
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  // async update(id: number, updateUserDto: UpdateUserDto) {
  //   // return `This action updates a #${id} user`;
  //   const user = await this.userRepository.findOne({
  //     where: {
  //       id,
  //     },
  //   });
  //   if (!user) {
  //     throw new NotFoundException();
  //   }
  //
  //   const newUser = await this.userRepository.save(user);
  //
  //   return newUser;
  // }

  // async remove(id: number) {
  //   // return `This action removes a #${id} user`;
  //   const
  // }
}
