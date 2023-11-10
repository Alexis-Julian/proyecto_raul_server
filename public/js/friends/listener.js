import { search_people } from './index.js';
import { searchPeople } from './utils.js';

export default () => {
  search_people.addEventListener('submit', searchPeople);
};
