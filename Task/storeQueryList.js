const Util = require('../Util')

module.exports = async (data) => {
  const record = { ...data, timestamp: Date.now() }
  const keys = Object.keys(record)
  const values = keys.map(key => record[key])
    .map(v => v.replace ? v.replace(/"/g, '//') : v)
  const sqlStr = `INSERT INTO search_list(${keys.join(', ')}) VALUES("${values.join('", "')}")`
  try {
    await Util.db.exec(sqlStr)
    return true
  } catch (err) {
    Util.logger.error(`record fail: ${JSON.stringify(record)}`)
    Util.logger.error(`sql exec fail: ${sqlStr}`)

    console.log(1111111, values)
    return false
  }
}