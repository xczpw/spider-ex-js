function getCurrentTime() {
    return Date.now()
}

module.exports = {
    info: (content) => {
        console.info(`[${getCurrentTime()}] [INFO] \t ${content}`)
    },
    warn: (content) => {
        console.warn(`[${getCurrentTime()}] [WARN] \t ${content}`)
    },
    error: (content) => {
        console.error(`[${getCurrentTime()}] [ERROR] \t ${content}`)
    },
}