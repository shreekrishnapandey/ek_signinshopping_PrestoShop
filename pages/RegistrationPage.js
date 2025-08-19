const BasePage = require('./BasePage');

class RegistrationPage extends BasePage {
    async selectTitle(title) {
        await this.frame.getByRole('radio', { name: title }).check();
    }

    async fillPersonalDetails(firstName, lastName, email, password, birthdate) {
        await this.frame.getByRole('textbox', { name: 'First name' }).fill(firstName);
        await this.frame.getByRole('textbox', { name: 'Last name' }).fill(lastName);
        await this.frame.getByRole('textbox', { name: 'Email' }).fill(email);
        await this.frame.getByRole('textbox', { name: 'Password input' }).fill(password);
        await this.frame.getByRole('button', { name: 'Show' }).click();
        await this.frame.getByRole('textbox', { name: 'Birthdate' }).fill(birthdate);
    }

    async acceptAllOptions() {
        const checkboxes = [
            'Receive offers from our',
            'I agree to the terms and',
            'Sign up for our newsletter',
            'Customer data privacy The'
        ];
        
        for (const name of checkboxes) {
            await this.frame.getByRole('checkbox', { name }).check();
        }
    }

    async saveRegistration() {
        await this.frame.getByRole('button', { name: 'Save' }).click();
        // Wait for user to be redirected to home page
        await this.frame.getByRole('link', { name: ' Sign in' }).waitFor();
        
        const HomePage = require('./HomePage');
        return new HomePage(this.page);
    }
}

module.exports = RegistrationPage;