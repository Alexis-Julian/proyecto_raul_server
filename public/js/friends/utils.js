const APIUSER = `http://localhost:3000/api/friends/search/`;
const APIFRIEND = `http://localhost:3000/api/friends/add/`;
const GETFRIEND = `http://localhost:3000/api/friends`;
const GETREQUEST = `http://localhost:3000/api/friends/request`;

import { list_people } from './index.js';
import { RenderCard, RenderCardFriend, RenderCardRequest } from './view.js';

async function fetchUser(username) {
  const response = await fetch(APIUSER + username);
  return await response.json();
}

async function fetchFriends() {
  const response = await fetch(GETFRIEND);
  return await response.json();
}

async function fetchRequest() {
  const response = await fetch(GETREQUEST);
  return await response.json();
}

export async function HandlesearchPeople(e) {
  e.preventDefault();
  list_people.innerHTML = '';
  list_people.name = 'search';

  const username = e.target['username'].value;

  const data = await fetchUser(username);

  data.map((user) => {
    list_people.innerHTML += RenderCard(user);
  });
}

async function sendRequest(idfriend) {
  const repsonse = await fetch(APIFRIEND + idfriend);
  const data = await repsonse.json();
  console.log(data);
  /* Enviar la peticion de la id  de HandleAddPeople */
}

function viewProfile() {}

function declineRequest() {}

export function HandleAddPeople(e) {
  e.preventDefault();
  const buttonClicked = e.submitter;
  const idButton = buttonClicked.name;

  const MENU = {
    search: () => sendRequest(idButton),
    friends: () => viewProfile(idButton),
    request: () => declineRequest(idButton),
  };
  const a = MENU[list_people.name];
  console.log(a);
}

export async function HandleViewFriends() {
  list_people.innerHTML = '';

  list_people.name = 'friends';

  const friends = await fetchFriends();

  friends.map((user) => {
    list_people.innerHTML += RenderCardFriend(user);
  });
}

export async function HandleViewRequest() {
  list_people.innerHTML = '';
  list_people.name = 'request';

  const requests = await fetchRequest();

  requests.map((request) => {
    list_people.innerHTML += RenderCardRequest(request.user);
  });
}
