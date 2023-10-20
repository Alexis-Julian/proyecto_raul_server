import { Users } from 'src/schemas/user.model';
import { getCookiesFromSocket } from 'src/utils/cookies-utils';
import { parsingToken } from 'src/utils/jwt-utils';

interface UserActive extends Users {
  chat_friend: string | undefined;
}

export function extractUserConnecting(socket): UserActive | null {
  const { token }: string | any = getCookiesFromSocket(socket);

  const user = parsingToken(token);

  return { ...user, chat_active: undefined };
}

export function UserDisconnect(socket) {}
