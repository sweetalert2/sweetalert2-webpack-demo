const { toMatchImageSnapshot } = require('jest-image-snapshot')
const puppeteer = require('puppeteer')

expect.extend({ toMatchImageSnapshot })

describe('jest-image-snapshot + puppeteer = <3', () => {
  let browser
  let page

  const matchScreenshot = async (config) => {
    config = config || {
      failureThreshold: '0.03',
      failureThresholdType: 'percent'
    }
    await page.waitFor(300)
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot(config)
  }

  beforeAll(async () => {
    browser = await puppeteer.launch({
      // debug mode, uncomment this to see the browser
      // headless: false
    })
    page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/')
  })

  it('works nicely and smoothly', async () => {
    await matchScreenshot()

    await page.click('.swal2-confirm')
    await page.type('.swal2-input', 'Limon')
    await matchScreenshot()

    await page.click('.swal2-confirm')
    await page.type('.swal2-input', 'Planet Earth')
    await matchScreenshot()

    await page.click('.swal2-confirm')
    await matchScreenshot()
  })

  afterAll(async () => {
    await browser.close()
  })
})
