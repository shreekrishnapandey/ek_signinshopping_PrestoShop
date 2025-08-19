const BasePage = require('./BasePage');
const CartPage = require('./CartPage');

class ProductPage extends BasePage {
    async selectColor(color) {
        const colorSelector = this.frame.getByRole('radio', { name: color });
        await this.waitForVisible(colorSelector);
        await colorSelector.check();
    }

    async addToCart() {
        const addToCartBtn = this.frame.getByRole('button', { name: /Add to cart/i });
        await this.waitForVisible(addToCartBtn, 60000);
        await this.clickWithRetry(addToCartBtn);
        await this.waitForSuccessMessage();
        return new CartPage(this.page);
    }

    async waitForSuccessMessage() {
        try {
            await this.frame.getByText('Product successfully added').waitFor({ state: 'visible', timeout: 15000 });
        } catch {
            await this.page.getByText('Product successfully added').waitFor({ state: 'visible', timeout: 15000 });
        }
    }
}

module.exports = ProductPage;
