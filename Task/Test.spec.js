import { test } from '@playwright/test';
import { Saucedemo_Function } from './Functions/Function';

test('Login and verify homepage', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.pause();
    await Saucedemo_Function.verifyLoginPage(page, 'standard_user', 'secret_sauce');
    await Saucedemo_Function.verifySubPageHeading(page);
    await Saucedemo_Function.verifyProducts(page);
    await Saucedemo_Function.verifyAddCart(page);
    await Saucedemo_Function.verifyYourInfoPage(page);
    await Saucedemo_Function.verifyCheckOutOverivew(page);
    await Saucedemo_Function.verifyCompletedStatus(page);
    await Saucedemo_Function.verifyFooter(page);
    await Saucedemo_Function.verifySideMenu(page);

});
