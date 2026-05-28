class Helper {

    static async takeScreenshot(page, fileName) {

        await page.screenshot({
            path: `screenshots/${fileName}.png`,
            fullPage: true
        });
    }
}

module.exports = Helper;