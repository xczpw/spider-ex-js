const puppeteer = require('puppeteer')
const Util = require('../Util')
const Config = require('../constant/Config')

module.exports = async (callback = async () => {}) => {
    const browser = await puppeteer.launch({
        headless: true,
        slowMo: Math.random() * Config.MaxDelay,
    })
    try {
        await callback(browser)
    } catch (err) {
        Util.logger.error(err)
    }
    await browser.close()
}