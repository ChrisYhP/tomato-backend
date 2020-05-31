import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';
import { validate } from 'class-validator';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(userInfo: CreateUserDto): Promise<User> {
    const { name, password, email } = userInfo
    const user = await this.userRepository
    .createQueryBuilder('user')
    .where('user.name = :name', {name})
    .orWhere('user.email = :email', {email})
    .getOne()
    
    if (user) {
      throw new HttpException({message: '用户名或者邮箱已存在'}, HttpStatus.BAD_REQUEST)
    }
    
    let newUser = new User();
    newUser.name = name;
    newUser.password = password;
    newUser.email = email;
    
    return await this.userRepository.save(newUser);
  }

  async findOne(user: LoginUserDto) {
    return await this.userRepository
    .createQueryBuilder()
    .select("name")
  }
}
