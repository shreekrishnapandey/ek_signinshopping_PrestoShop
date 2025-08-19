const BasePage = require('./BasePage');

class LoginPage extends BasePage {

    async goToRegistration() {
        await this.frame.getByRole('link', { name: 'No account? Create one here' }).click();
        // Wait for registration form elements
        await this.frame.getByRole('radio', { name: 'Mr.' }).waitFor();
        
        const RegistrationPage = require('./RegistrationPage');
        return new RegistrationPage(this.page);
    }
} // Ensure this closing brace is present

module.exports = LoginPage;