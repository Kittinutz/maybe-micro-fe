const puppeteer = require('puppeteer')
const fs = require('fs')

const puppeteerLaunch = async () => puppeteer.launch({
  executablePath: process.env.CHROME_BIN || null,
  args: ['--no-sandbox', '--headless', '--disable-gpu']
})

const scrapLazada = async () => {
  const browser = await puppeteerLaunch()
  try {
    const page = await browser.newPage()
    await page.goto('https://www.lazada.co.th/pages/i/th/act/flash-sale')
    const response = await page.waitForResponse(
      response =>
        response
          .request()
          .url()
          .includes('mtop.lazada.pegasus.service.business.fs') &&
        response.status() === 200,
      { timeout: 10000 }
    )
    const responseJson = await response.json()
    fs.writeFileSync(
      'data/lazada-flash-sale.json',
      JSON.stringify(responseJson, null, 2)
    )
  } catch (err) {
    console.error(err)
  } finally {
    await browser.close()
  }
}

module.exports = {
  scrapLazada
}
