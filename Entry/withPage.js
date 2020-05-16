module.exports = async (browser, callback = async () => {}) => {
    const page = await browser.newPage()
    await callback(page)
}