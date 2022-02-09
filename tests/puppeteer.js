const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:4200')
  await page.screenshot({
    path: 'full.png',
    fullPage: true
  })

  console.log(await page.$eval('.container .row .col-xs-12 h3', el => el.innerText));

  await page.goto('https://google.com/')
  await page.emulate(puppeteer.devices['iPhone X'])
  await page.screenshot({
    path: 'full.png',
    fullPage: true
  })

  console.log(await page.title())
  await browser.close()
})()
