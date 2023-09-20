import { HttpException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserDao } from '../../dao/user.dao';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

type CallbackType = (token: string) => any;

@Injectable()
export class AuthService {
  constructor(
    private readonly UserDao: UserDao,
    private jwtService: JwtService,
  ) {}

  async register(userObjectRegister: RegisterAuthDto, addToken: CallbackType) {
    const { email, password } = userObjectRegister;

    const findEmail = await this.UserDao.findOne({ email });

    if (findEmail) return new HttpException('USER_ALREADY_CREATED', 404);

    const encrypted = await hash(password, 10);

    userObjectRegister = { ...userObjectRegister, password: encrypted };
    /* Falta agregar el token,
     validar que los campos se creen correctamente  */
    addToken('1');
    return this.UserDao.create(userObjectRegister);
  }

  async login(userObjectLogin: LoginAuthDto, addToken: CallbackType) {
    const { email, password } = userObjectLogin;

    const findUser = await this.UserDao.findOne({ email });

    if (!findUser) return new HttpException('USER_NOT_FOUND', 404);

    const checkPassword = await compare(password, findUser.password);

    if (!checkPassword) return new HttpException('PASSWORD_INCORRECT', 403);

    const payload = { id: findUser.id, email: findUser.email, username: findUser.username, img: findUser.img || 'no image' };

    const token = await this.jwtService.signAsync(payload);

    addToken(token);

    return token;
  }
}
