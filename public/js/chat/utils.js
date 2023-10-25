/* Sockets */
import { EMIT_CHANGE_CHAT } from './socket.js';
import { EMIT_MESSAGE_FRIEND } from './socket.js';

/* DOM */
import { panel_chat } from './index.js';

/* Views */
import { HeaderPanelChat } from './view.js';
import { SendInputMessage } from './view.js';
import { ContainerMessage } from './view.js';

export const HandleSubmitFriend = (e) => {
  const clickedElement = e.target;
  const idFriendValue = clickedElement.getAttribute('name');

  EMIT_CHANGE_CHAT(idFriendValue);
};

export const RenderChatFriend = (friend) => {
  const classList = ['h-full', 'w-full', 'rounded-lg'];
  /* 'bg-primary-color', */
  const div = document.createElement('div');

  div.classList.add(...classList);
  panel_chat.appendChild(div);

  div.innerHTML += HeaderPanelChat(friend) + ContainerMessage() + SendInputMessage();

  const form_message = document.getElementById('submit_message');

  form_message.addEventListener('submit', SendMessage);
};

function SendMessage(e) {
  e.preventDefault();
  const message = document.getElementById('value_message').value;
  EMIT_MESSAGE_FRIEND(message);
}
