import { Controller, Render, Get, Req } from '@nestjs/common';

@Controller('view/friends')
export class FriendsController {
  @Get()
  @Render('friends')
  viewFriends(@Req() req: any) {
    return { user: req.session.user, layout: 'home' };
  }
}
