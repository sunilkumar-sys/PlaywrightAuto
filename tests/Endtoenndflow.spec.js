
import { expect, test } from '@playwright/test';

import { PageObjectManager } from './PageObjectManager';
//const data=JSON.parse(JSON.stringify(require('../DataFiles/Testdata.json')));
import dataset from "../DataFiles/Testdata1.json" assert { type: "json" };


///const dataset = JSON.parse(JSON.stringify(require("../DataFiles/Testdata.json")));

//for (const data of dataset) {

  test(`login to application ${dataset.productname}`, async ({ page }) => {

    //const productName="ZARA COAT 3"

    const pageoobjecmanage = new PageObjectManager(page);
    const logpage = pageoobjecmanage.getloginpage();
    const homepage = pageoobjecmanage.gethome();
    const cartpage = pageoobjecmanage.getcart();
    const payment = pageoobjecmanage.getpayment();
    await logpage.geturl();
    //await logpage.loginapplication("sk876sunil@gmail.com", "Tcs@1234");
    await logpage.loginapplication(dataset.username, dataset.password);
    await homepage.searchforproduct(dataset.productname);
    await homepage.navigatecartpage();
    await cartpage.cartpageverification()
    const prod = await cartpage.productnameverifiaction();
    expect(prod).toContain(dataset.productname);
    await cartpage.naviagtetocheckoutpage();
    await payment.fillpaymentdetails();
    await payment.getthankstext();








  });

//}
