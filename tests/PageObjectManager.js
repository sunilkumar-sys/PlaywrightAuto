import { Cartpage } from "./pageobjectloctar/Cartpage.js";
import { Homepage } from "./pageobjectloctar/Homepage.js";
import { LoginPage } from "./pageobjectloctar/LoginPage.js";
import { Paymentpage } from "./pageobjectloctar/Paymentpage.js";

export class PageObjectManager{
    constructor(page){
        this.page=page;
        this.loginpage=new LoginPage(this.page);
        this.homepage=new Homepage(this.page);
        this.cartpage=new Cartpage(this.page);
        this.paymentpage=new Paymentpage(this.page);


    }
     getloginpage(){
        return this.loginpage;
    }
     gethome(){
        return this.homepage;
    }
     getcart(){
        return this.cartpage;
    }
     getpayment(){
        return this.paymentpage;
    }

}