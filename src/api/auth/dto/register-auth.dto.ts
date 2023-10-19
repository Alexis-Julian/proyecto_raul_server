import { LoginAuthDto } from './login-auth.dto';
import { IsNotEmpty } from 'class-validator';

export class RegisterAuthDto extends LoginAuthDto {
  @IsNotEmpty()
  username: string;

  img: string;

  role: string;
}
