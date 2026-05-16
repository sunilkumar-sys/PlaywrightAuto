export class Homepage {
    constructor(page) {
        this.page = page;
        this.products = page.locator("div.card-body");
        this.productname = page.locator(".card-body");
        this.cartlink=page.locator("[routerlink='/dashboard/cart']");


    }
    async searchforproduct(productnames) {
        const counts = await this.products.count();

        for (let i = 0; i < counts; i++) {
            await this.productname.first().waitFor();
            const texts = await this.productname.nth(i).locator("b").textContent();
            if (productnames === texts) {
                await this.productname.first().waitFor();
                await this.productname.nth(i).locator("text= Add To Cart").click();
                

            }






        }
         
       
      

    }
    async navigatecartpage(){
       

        await this.cartlink.click();

    }


}