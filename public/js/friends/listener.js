import { search_people, list_people, btn_friend, btn_request } from './index.js';

import { HandlesearchPeople, HandleAddPeople, HandleViewFriends, HandleViewRequest } from './utils.js';

export default () => {
  //Boton para buscar personas con opciones para agregarlo de amigos
  search_people.addEventListener('submit', HandlesearchPeople);

  //Boton para enviar solicitud de amistad a la persona
  list_people.addEventListener('submit', HandleAddPeople);

  //Boton para mostrar los amigos
  btn_friend.addEventListener('click', HandleViewFriends);

  //Boton para mostra los solicitudes pendiente
  btn_request.addEventListener('click', HandleViewRequest);
};
