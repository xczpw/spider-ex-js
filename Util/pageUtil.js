const logger = require('./logger')

module.exports.waitElementWithTimeout = async function (page, selector, timeout = 10000) {
    return Promise.race([
        page.waitForSelector(selector),
        new Promise((_, reject) => {
            setTimeout(() => {
                logger.error(`wait ${selector} beyond ${timeout} ms`)
                reject(new Error(`wait ${selector} beyond ${timeout} ms`))
            }, timeout)
        })
    ])
}