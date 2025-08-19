class BasePage {
    constructor(page) {
        if (!page) throw new Error('Page is undefined in BasePage constructor');
        this.page = page;
        this.frame = page.frameLocator('iframe[name="framelive"]');
    }

    async waitForVisible(locator, timeout = 30000) {
        await locator.waitFor({ state: 'visible', timeout });
    }

    async clickWithRetry(locator, maxAttempts = 3) {
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                await locator.click({ timeout: 15000 });
                return;
            } catch (error) {
                if (attempt === maxAttempts) throw error;
                await this.page.waitForTimeout(2000);
            }
        }
    }

    async takeScreenshot(name) {
        await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
    }
}

module.exports = BasePage;
