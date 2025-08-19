const BasePage = require('./BasePage');
const LoginPage = require('./LoginPage');
const ProductPage = require('./ProductPage');

class HomePage extends BasePage {
    async navigate() {
        await this.page.goto('https://demo.prestashop.com/#/en/front');
        await this.frame.locator('body').waitFor({ state: 'visible', timeout: 30000 });
    }

    async goToSignIn() {
        const signInBtn = this.frame.locator(
        'a[title="Log in to your customer account"] i.material-icons'
    );
    await signInBtn.click();
const createAccountLink = this.frame.locator(
        'xpath=//a[normalize-space()="No account? Create one here"]'
    );
    await createAccountLink.waitFor({ timeout: 10000 });
        return new LoginPage(this.page);
    }
;
    async openProduct(productName) {
        await this.frame.getByRole('link', { name: productName }).first().click();
        await this.frame.getByRole('radio').first().waitFor({ state: 'visible', timeout: 15000 });
        return new ProductPage(this.page);
    }
}

module.exports = HomePage;
