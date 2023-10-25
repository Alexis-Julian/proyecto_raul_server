import { list_friends } from './index.js';
/* Manejadores de eventos */
import { HandleSubmitFriend } from './utils.js';

function listeners() {
  list_friends.addEventListener('click', HandleSubmitFriend);
}
export const Listener = listeners;
