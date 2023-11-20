import { Controller, Get, Param, Delete, Req, Query } from '@nestjs/common';
import { FriendsService } from './friends.service';

@Controller('api/friends')
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  @Get()
  getFriends(@Query('page') page: number = 1, @Query('limit') limit: number = 15, @Req() req: any) {
    return this.friendsService.getFriends(page, limit, req);
  }

  @Get('search/:name')
  getPeople(@Param('name') name: string, @Req() req: any) {
    return this.friendsService.getPeople(name, req);
  }

  @Get('add/:id')
  addFriend(@Param('id') id: string, @Req() req: any) {
    return this.friendsService.addFriend(id, req);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string, @Req() req: any) {
    return this.friendsService.removeFriend(id, req);
  }
}
