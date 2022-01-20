
import * as cheerio from 'cheerio';
import puppeteer from 'puppeteer';

//const cheerio = require('cheerio');


const url = 'https://www.skipthedishes.com/pocket-holic';

  async function getPage(url) {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'});
    //await page.waitForSelector('h1');
    const html = await page.content(); // serialized HTML of page DOM
    // const $ = cheerio.load(html);
    let restaurantName = await page.evaluate(()=>{
      return document.querySelector('h1').textContent.trim();
    });
    console.log("restaurantName:", restaurantName);
    await browser.close();
    //console.log("here is the html", html);
    return html;
  }

  getPage(url);
//const html = getPage(url);
  // const $ = cheerio.load(html);
  // // const span = $('.tds-tally__count.tds-tally__count_success');
  // // console.log(span.text());

  // //const restaurantName = $('h1');
  // const restaurantName = $('.MuiTypography-root jss287 styles__StyledTitleText-sc-1etxvxm-10 kvxbjm MuiTypography-h4');
  // //console.log(restaurantName);
  // console.log(restaurantName.html());

  // //attempting to use a promise
  // const getHTML = new Promise((resolve,reject) => {
  //   const html = getPage(url);
  //   if (html !== null) {
  //     console.log(html);
  //     resolve('success');
  //     return html;
  //   } else {
  //     reject('failed');
  //     return;
  //   }

  // });
  
  // getHTML
  //   .then((html)=>{
  //     console.log("here-html", html)
  //     const $ = cheerio.load(html);
  //     return $;
  //   })
  //   .then(($)=>{
  //     console.log("here-$");
  //     const restaurantName = $('h1');
  //     console.log("did it work1?", restaurantName.html());
  //     //console.log("did it work2?", restaurantName);
  //   })
  //   .catch((message)=>{
  //     console.log(message)
  //   });