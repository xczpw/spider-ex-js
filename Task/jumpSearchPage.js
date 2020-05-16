const Util = require('../Util')

module.exports = async (page, queryStr = null, pageIndex = 1) => {
    const pageUrl = `https://www.jianshu.com/search?q=${queryStr}&page=${pageIndex}&type=note`
    Util.logger.info(`prepare to jump to ${pageUrl}`)
    return await page.goto(pageUrl)
}

