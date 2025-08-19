const BasePage = require('./BasePage');
const CheckoutPage = require('./CheckoutPage');

class CartPage extends BasePage {
    async proceedToCheckout() {
        const checkoutBtn = this.frame.locator('#blockcart-modal').getByRole('link', { name: /Proceed to checkout/i });
        await this.clickWithRetry(checkoutBtn);
       const checkoutbtn2= this.frame.getByRole('link', { name: /Proceed to checkout/i });
        await checkoutbtn2.waitFor({ state: 'visible', timeout: 15000 });
        await this.clickWithRetry(checkoutbtn2);            

        return new CheckoutPage(this.page);
    }
}

module.exports = CartPage;
