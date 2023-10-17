import { HttpException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { Response } from 'express';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserDao } from '../../dao/user.dao';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly UserDao: UserDao,
    private jwtService: JwtService,
  ) {}

  async register(userObjectRegister: RegisterAuthDto, callback) {
    const { email, password } = userObjectRegister;

    const findEmail = await this.UserDao.findOne({ email });

    if (findEmail) return new HttpException('USER_ALREADY_CREATED', 404);

    const encrypted = await hash(password, 10);

    userObjectRegister = { ...userObjectRegister, password: encrypted };
    /* Falta agregar el token,
     validar que los campos se creen correctamente  */
    //addToken('1');
    const user = this.UserDao.create(userObjectRegister);

    if (!user) return new HttpException('ERROR_CREATE_USER', 404);

    return new HttpException(user, 201);
  }

  async login(userObjectLogin: LoginAuthDto, res: Response) {
    const { email, password } = userObjectLogin;

    const findUser = await this.UserDao.findOne({ email });

    if (!findUser) return new HttpException('USER_NOT_FOUND', 404);

    const checkPassword = await compare(password, findUser.password);
    if (!checkPassword) return new HttpException('PASSWORD_INCORRECT', 403);

    const payload = { id: findUser.id, email: findUser.email, username: findUser.username, img: findUser.img || 'no image' };

    const token = await this.jwtService.signAsync(payload);

    res.cookie('token', token);

    return new HttpException(token, 202);
  }
}

/* addToken: CallbackType */

/*  */ /* (token: string) => {
  req.session.token = token;
  response.status(200).cookie('token', token);
} */
