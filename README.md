# ek_signinshopping_PrestoShop
This project include signin with user and do shopping.
# Project Name - Playwright Automation of Shopping cart as a signed in user
# Install Dependencies
npm install
# Install browsers
npx playwright install
# EXECUTION
npx playwright test --headed //Execution in browser UI
npx playwright test tests/shoppingTest.spec.js //Execute specific file
# GENERATE HTML REPORT
npx playwright test --reporter=html

npx playwright show-report
# REPORTING
 1. HTML reports generated in playwright-report/
 2. Screenshots on failure stored in test-results/
http://localhost:9323/ //immediately open after test.
