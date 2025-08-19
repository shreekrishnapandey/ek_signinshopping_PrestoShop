const { test } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test('Complete shopping flow', async ({ page }, testInfo) => {
    test.setTimeout(240000); // 4 min

    try {
        const home = new HomePage(page);
        await home.navigate();

        const login = await home.goToSignIn();
        const reg = await login.goToRegistration();

        await reg.selectTitle('Mr.');
        await reg.fillPersonalDetails('Shree','Pandey','shrikrishna.pandey1@gmail.com','#Playwright@25','07/05/1996');
        await reg.acceptAllOptions();

        const homeAfterReg = await reg.saveRegistration();
        const productPage = await homeAfterReg.openProduct('Hummingbird printed t-shirt');
        await productPage.selectColor('Black');

        const cartPage = await productPage.addToCart();
        const checkoutPage = await cartPage.proceedToCheckout();

        await checkoutPage.fillAddressDetails('Koteshwor','Kathmandu','16','86260');
        await checkoutPage.continueToShipping();
        await checkoutPage.addComment('Thankyou');
        await checkoutPage.acceptTerms();

        console.log('Test completed successfully!');
    } catch (error) {
        console.error('Test failed:', error);
        await page.screenshot({ path: `screenshots/${testInfo.title.replace(/\s+/g, '_')}_failure.png` });
        throw error;
    }
});
