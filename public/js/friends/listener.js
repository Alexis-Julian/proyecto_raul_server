import { search_people, list_people } from './index.js';

import { HandlesearchPeople, HandleAddPeople } from './utils.js';

export default () => {
  search_people.addEventListener('submit', HandlesearchPeople);
  list_people.addEventListener('submit', HandleAddPeople);
};
