import { Users } from 'src/schemas/user.model';

export class getFriend {
  private email: string;
  private role: string;
  private username: string;
  private img: string;

  constructor(friend: Users) {
    this.email = friend.email;
    this.role = friend.role;
    this.username = friend.username;
    this.img = friend.img;
  }
}
