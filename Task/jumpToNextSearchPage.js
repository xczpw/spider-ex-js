const Util = require('../Util')

module.exports = async (page) => {
  try {
    await Util.pageUtil.waitElementWithTimeout(page, '.search-content .pagination li:last-child a')
    await page.click('.search-content .pagination li:last-child a')
    return true
  } catch(e) {
    Util.logger.error(e)
    return false
  }
}