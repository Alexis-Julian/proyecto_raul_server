import { Get, Post, Delete, Patch, Body, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthLoginUserDto } from './dto/auth-login_user.dto';

interface Params {
  id: string;
}

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /* @Post('login')
  loginUser(@Body() payload: AuthLoginUserDto) {
    return this.userService.authLogin(payload);
  }

  @Post('register')
  createUser(@Body() CreateUserDto: any) {
    console.log(CreateUserDto);
    return 'Create User';
  }

  @Get(':id')
  searchUser(@Param() { id }: Params) {
    return this.userService.findOne(id);
  } */

  @Patch(':id')
  updateUser(@Body() UserDto: any) {
    console.log(UserDto);
    return 'this.userService.findOne';
  }

  @Delete(':id')
  deleteUser() {
    return 'Delete User';
  }
}
