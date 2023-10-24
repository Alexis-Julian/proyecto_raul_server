import { Controller, Render, Get, Req } from '@nestjs/common';
import { FriendsService } from 'src/api/friends/friends.service';

@Controller('view/friends')
export class FriendsController extends FriendsService {
  /* constructor(private readonly friendsService: FriendsService) {} */
  @Get()
  @Render('friends')
  async viewFriends(@Req() req: any) {
    const friends = await this.getFriends(1, 10, req);
    return { user: req.session.user, friends: friends, layout: 'home' };
  }
}
