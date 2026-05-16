export class LoginPage{
    constructor(page){
        this.page=page;
        this.UserName=page.locator("#userEmail");
        this.PassWord=page.locator("#userPassword");
        this.logibt=page.locator("#login");


    }
    async geturl(){

       await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");


    }
    async loginapplication(username,password){
       await this.UserName.fill(username);
       await this.PassWord.fill(password);
       await this.logibt.click();
       await this.page.waitForLoadState('networkidle')

    }


}