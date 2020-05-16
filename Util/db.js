const fs = require('fs')
const sqlite3 = require('sqlite3').verbose()

const Config = require('../constant/Config')
const logger = require('./logger')

class DB {
  constructor(filePath) {
    if (!fs.existsSync(filePath)) {
      logger.info(`Can't find sqlite from ${filePath}, a new file will be created`)
      fs.openSync(filePath, 'w')
    }
    this.db = new sqlite3.Database(filePath)
  }

  async exec(SQL) {
    return new Promise((resolve, reject) => {
      this.db.exec(SQL, (err) => {
        if (err) {
          logger.error(err)
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }

  close() {
    this.db.close()
  }
}

module.exports = new DB(Config.SqlitePath)