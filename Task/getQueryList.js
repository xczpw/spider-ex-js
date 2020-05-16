const Util = require('../Util')

module.exports = async (page) => {
  try {
    await Util.pageUtil.waitElementWithTimeout(page, 'ul.note-list')
    return await page.evaluate(() => {
      return Array.from(
        document.querySelector('ul.note-list')
          .querySelectorAll('li .content')
      )
        .map((content) => ({
          authorName: content.querySelector('.author .nickname').textContent,
          authorLink: content.querySelector('.author .avatar').getAttribute('href'),
          title: content.querySelector('.title').textContent,
          link: content.querySelector('.title').getAttribute('href'),
          readNum: content.querySelector('.meta > *:nth-child(1)').textContent.trim(),
          commentNUm: content.querySelector('.meta > *:nth-child(2)').textContent.trim(),
          likeNum: content.querySelector('.meta > *:nth-child(3)').textContent.trim(),
        }))
    })
  } catch(e) {
    return []
  }
}