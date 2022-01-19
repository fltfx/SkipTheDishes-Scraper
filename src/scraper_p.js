
import * as cheerio from 'cheerio';
import puppeteer from 'puppeteer';


const url = 'https://www.skipthedishes.com/pocket-holic';

  async function getPage(url) {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle0'});

    const html = await page.content(); // serialized HTML of page DOM.
    await browser.close();
    console.log("here is the html", html);
    return html;
  }

  const html = getPage(url);
  const $ = cheerio.load(html);
  // const span = $('.tds-tally__count.tds-tally__count_success');
  // console.log(span.text());

  const restaurantName = $('h1');
  console.log(restaurantName);
  console.log(restaurantName.html());