const APIUSER = `http://localhost:3000/api/friends/search/`;
const APIFRIEND = `http://localhost:3000/api/friends/add/`;

import { list_people } from './index.js';
import { RenderCard } from './view.js';

async function fetchUser(username) {
  const response = await fetch(APIUSER + username);
  return await response.json();
}

async function sendRequest(idfriend) {
  const repsonse = await fetch(APIFRIEND + idfriend);
  const data = await repsonse.json();
  console.log(data);
  /* Enviar la peticion de la id  de HandleAddPeople */
}

export async function HandlesearchPeople(e) {
  e.preventDefault();
  list_people.innerHTML = '';

  const username = e.target['username'].value;

  const data = await fetchUser(username);

  data.map((user) => {
    list_people.innerHTML += RenderCard(user);
  });
}

export function HandleAddPeople(e) {
  e.preventDefault();
  const buttonClicked = e.submitter;
  const idButton = buttonClicked.name;
  sendRequest(idButton);
}
