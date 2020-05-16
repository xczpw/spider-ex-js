const Util = require('../Util')

module.exports = async () => {
  try {
    await Util.db.exec('CREATE TABLE search_list ( timestamp String, authorName String, authorLink String, title String, link String, readNum String, commentNum String, likeNum String )')
  } catch (err) {}
}