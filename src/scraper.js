import axios from 'axios';

//const PAGE_URL = 'https://en.wikipedia.org/wiki/Timeline_of_programming_languages';
const PAGE_URL = 'https://www.skipthedishes.com/pocket-holic';

const scraper = async () => {
  const response = await axios.get(PAGE_URL);

  console.log(response.data);
};

(async () => {
  await scraper();
})();