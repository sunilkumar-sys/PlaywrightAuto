import { expect } from "@playwright/test";

export class Cartpage {
    constructor(page) {
        this.page = page;
        this.continueshopping = page.locator("button[routerlink='/dashboard']");
        this.buynow = page.locator("div.removeWrap button[class='btn btn-primary']");
        this.delete = page.locator("div.removeWrap button[class='btn btn-danger']");
        this.checkout = page.locator("div.subtotal button[class='btn btn-primary']");
        this.productid = page.locator("div.cartSection p[class='itemNumber']");
        this.prodname = page.locator("div.cartSection h3")


    }
    async cartpageverification() {
        await this.continueshopping.waitFor();
         const bool = await this.continueshopping.isVisible();
        expect(bool).toBeTruthy();
         expect(await this.buynow.isVisible()).toBeTruthy();
         expect(await this.delete.isVisible()).toBeTruthy();
         expect(await this.checkout.isVisible()).toBeTruthy();


    }
    async productnameverifiaction() {
        const prodna = await this.prodname.textContent();
        return prodna;
    }
    async productidverifiaction() {
        const productids = await this.productid.textContent();
        return productids;
    }
    async naviagtetocheckoutpage() {
        await this.buynow.click();


    }



}