import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { Response } from 'express';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserDao } from '../../dao/user.dao';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/schemas/user.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly UserDao: UserDao,
    private jwtService: JwtService,
  ) {}

  async register(userObjectRegister: RegisterAuthDto, callback: any) {
    const { email, password } = userObjectRegister;

    const findEmail = await this.UserDao.findOne({ email });

    if (findEmail) return new HttpException('USER_ALREADY_CREATED', 404);

    const encrypted = await hash(password, 10);

    userObjectRegister = { ...userObjectRegister, password: encrypted, img: 'https://i.imgur.com/9zz7ubU.jpg', role: 'usuario' };

    const user: Users = await this.UserDao.create(userObjectRegister);

    if (!user) return new HttpException('ERROR_CREATE_USER', 404);

    const payload = { id: user.id, email: user.email, username: user.username, img: user.img || 'no image' };

    const token = await this.jwtService.signAsync(payload);

    callback(user, token);

    return new HttpException(token, 201);
  }

  async login(userObjectLogin: LoginAuthDto, callback) {
    const { email, password } = userObjectLogin;

    const findUser = await this.UserDao.findOne({ email });

    if (!findUser) return new HttpException('USER_NOT_FOUND', 404);

    const checkPassword = await compare(password, findUser.password);

    if (!checkPassword) return new HttpException('PASSWORD_INCORRECT', 403);

    const payload = { id: findUser.id, email: findUser.email, username: findUser.username, img: findUser.img || 'no image' };

    const token = await this.jwtService.signAsync(payload);

    callback(findUser, token);

    return new HttpException(token, 202);
  }

  async logout(res: Response, req: any) {
    if (req.session) {
      req.session.destroy();
      res.clearCookie('token');
      return new HttpException('SESSION_DELETED', HttpStatus.ACCEPTED);
    } else {
      return new HttpException('SESSION_NOT_FOUND', HttpStatus.NOT_FOUND);
    }
  }
}
