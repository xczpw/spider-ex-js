const Entry = require('./Entry')
const Task = require('./Task')
const Util = require('./Util')

async function macroSpiderTask(searchStr) {
  await Entry.withBrowser(async (browser) => {
    await Entry.withPage(browser, async (page) => {
      await Task.initDb()

      await Task.jumpSearchPage(page, searchStr)
      let hasNextPage = true
      while (hasNextPage) {
        const res = await Task.getQueryList(page)
        res.forEach(item => {
          Task.storeQueryList(item)
        })
        hasNextPage = await Task.jumpToNextSearchPage(page)
      }
    })
  })
}

const searchStrArr = process.argv.slice(2)

;(async () => {
  await searchStrArr.map(async searchStr => {
    if (searchStr) {
      Util.logger.info(`start search: ${searchStr}`)
      await macroSpiderTask(searchStr)
    } else {
      Util.logger.warn(`can't find search string`)
    }
    return searchStr
  })
})()
