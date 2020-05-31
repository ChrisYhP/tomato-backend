import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';
import { hashSync, compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
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
    // 密码加密
    const salt = 10;
    const hashPassword = hashSync(password, salt)
    newUser.name = name;
    newUser.password = hashPassword;
    newUser.email = email;
    
    return await this.userRepository.save(newUser);
  }

  async login(userInfo: LoginUserDto) {
    const { name, password } = userInfo;
    const user =  await this.userRepository
    .createQueryBuilder('user')
    .where('user.name = :name', {name})
    .orWhere('user.email = :name', {name})
    .getOne()

    if (!user) {
      throw new HttpException({ message: '用户名或者邮箱不存在' }, HttpStatus.BAD_REQUEST)
    }
    // 校验密码
    const isPasswordValide = await compare(password, user.password)
    if (!isPasswordValide) {
      throw new HttpException({ message: '密码错误' }, HttpStatus.BAD_REQUEST)
    }
    // 生成token
    return {
      access_token: this.jwtService.sign(userInfo)
    }
  }
}
