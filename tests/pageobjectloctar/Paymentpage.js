

export class Paymentpage {
    constructor(page) {
        this.page = page;
        this.productnameinpaymentpage = page.locator("div.item__details div[class='item__title']");
        this.cardnumber = page.locator("div.row input[class='input txt text-validated']");
        this.expirymonth = page.locator("div select[class='input ddl']");
        this.expiryyear = page.locator("div select[class='input ddl']");
        this.ccvcode = page.locator("div input[class='input txt']");
        this.cardname = page.locator("div input[class='input txt']");
        this.applytoken = page.locator("div input[name='coupon']");
        this.applytokensub = page.locator("div button[type='submit']");
        this.country = page.locator("div input[placeholder='Select Country']");
        this.allcountry = page.locator("section[class='ta-results list-group ng-star-inserted']");
        this.countofcountry = page.locator("button[class='ta-item list-group-item ng-star-inserted']");
        this.placeorder = page.locator("a[class='btnn action__submit ng-star-inserted']");
        this.ordercomplete = page.locator("h1[class='hero-primary']");

    }
    async fillpaymentdetails() {
        await this.cardnumber.first().fill("4542 9931 9292 6666");
        await this.expirymonth.first().selectOption("05");
        await this.expiryyear.last().selectOption("25");
        await this.ccvcode.first().fill("555");
        await this.cardname.last().fill("Sunil Kumar");
        //await this.applytoken.fill("rahulshetty");
        // await this.applytokensub.click();
        await this.country.waitFor();
        await this.country.pressSequentially("Indi");
        await this.allcountry.isVisible();
        const count = await this.countofcountry.count();
        console.log(count);

        await this.countofcountry.filter({ hastext: "India" }).last().click();
        await this.placeorder.click();
        await this.ordercomplete.waitFor();








    }
    async getthankstext() {
        const val = await this.ordercomplete.textContent();
        console.log(val);

    }

}