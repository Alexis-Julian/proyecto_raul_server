import { Get, Delete, Patch, Body, Query, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 15) {
    return this.userService.findAll(page, limit);
  }

  @Get(':name')
  findByName(@Param('name') name: string) {
    return this.userService.findByName(name);
  }

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
