import { Controller, Render, Get, Req, Inject } from '@nestjs/common';
import { FriendsService } from 'src/api/friends/friends.service';

@Controller('view/friends')
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}
  @Get()
  @Render('friends')
  async viewFriends(@Req() req: any) {
    const friends = await this.friendsService.getFriends(1, 10, req);
    return { user: req.session.user, friends: friends, layout: 'home' };
  }
}
