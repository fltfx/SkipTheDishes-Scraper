import axios from 'axios';
import * as cheerio from 'cheerio';

//const PAGE_URL = 'https://en.wikipedia.org/wiki/Timeline_of_programming_languages';
const PAGE_URL = 'https://www.skipthedishes.com/pocket-holic';

//struggling with TS below... ignore for now
// type RestaurantInformation = {
//   name: string;
//   address: string;
//   menu_category: string[]; //an array of strings
//   interface Person {
//     name: string;
//     // Optional properties, marked with a "?"
//     age?: number;
//     // And of course functions
//     move(): void;
//   }
// };

const getData = (markup) => {
  const $ = cheerio.load(markup);
  //const restaurantName = $(".MuiTypography-root jss348 styles__StyledTitleText-sc-1etxvxm-10 kvxbjm MuiTypography-h4");
  const restaurantName = $('h1');
  
  console.log(restaurantName);
  console.log(restaurantName.html());
}


const scraper = async () => {
  const response = await axios.get(PAGE_URL);

  console.log(response.data);
  getData(response.data);
};

(async () => {
  await scraper();
})();