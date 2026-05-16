import { When, Given, Then } from "@cucumber/cucumber";
import { PageObjectManager } from "../../PageObjectManager.js";
import { chromium,expect } from "@playwright/test";
import { setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000)

Given('User Login into application with {string} and {string}', async function (username, password) {

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    this.pageObjectManager = new PageObjectManager(page);
    const logpage = this.pageObjectManager.getloginpage();
    await logpage.geturl();
    await logpage.loginapplication(username, password);
});



When('User search for the product {string} in the homepage', async function (productname) {
    const homepage = this.pageObjectManager.gethome();
    await homepage.searchforproduct(productname);
    await homepage.navigatecartpage();

});



Then('Add the product into the cartpage', async function () {
    const cartpage = this.pageObjectManager.getcart();
    await cartpage.cartpageverification()
        const prod = await cartpage.productnameverifiaction();
        expect(prod).toContain("ZARA COAT 3");
        await cartpage.naviagtetocheckoutpage();

});



Then('verify if the product added to cart page', async function () {
    const payment = this.pageObjectManager.getpayment();
    await payment.fillpaymentdetails();
    await payment.getthankstext();

});



When('User enter the payment details and order the product', async function () {

});


Then('verify the order details in summary page', async function () {

});
