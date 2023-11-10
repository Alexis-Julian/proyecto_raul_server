const APIUSER = `http://localhost:3000/api/users/`;
import { list_people } from './index.js';
import { RenderCard } from './view.js';

export async function HandlesearchPeople(e) {
  e.preventDefault();
  list_people.innerHTML = '';

  const username = e.target['username'].value;
  const response = await fetch(APIUSER + username);
  const data = await response.json();

  data.map((user) => {
    list_people.innerHTML += RenderCard(user);
  });
}
export async function HandleAddPeople() {
  /* Buscar el name del button para agregar de amigos */
}
