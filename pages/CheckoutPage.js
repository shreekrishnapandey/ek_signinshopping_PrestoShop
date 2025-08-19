const BasePage = require('./BasePage');

class CheckoutPage extends BasePage {

    async fillAddressDetails(address, city, state, zip) {
        await this.frame.getByRole('textbox', { name: 'Address', exact: true }).fill(address);
        await this.frame.getByRole('textbox', { name: 'City' }).fill(city);
        await this.frame.getByLabel('State').selectOption(state);
        await this.frame.getByRole('textbox', { name: 'Zip/Postal Code' }).fill(zip);
    }

    async continueToShipping() {
        await this.frame.getByRole('button', { name: 'Continue' }).click();
        await this.frame.getByRole('textbox', { name: /If you would like to add a/i }).waitFor();
    }

    async addComment(comment) {
        await this.frame.getByRole('textbox', { name: /If you would like to add a/i }).fill(comment);
        await this.frame.getByRole('button', { name: 'Continue' }).click();
    }

    async acceptTerms() {
        await this.frame.getByRole('checkbox', { name: /I agree to the terms/i }).check();
    }
}

module.exports = CheckoutPage;
