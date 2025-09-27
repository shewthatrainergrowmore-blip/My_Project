import { expect } from '@playwright/test';
import { Saucedemo_Locators } from '../Locators/Locator.js';  // adjust path

export const Saucedemo_Function = {
  async verifyLoginPage(page, userName, password) {
    await expect(Saucedemo_Locators.userName(page)).toHaveAttribute('placeholder', 'Username');
    await expect(Saucedemo_Locators.userPassword(page)).toHaveAttribute('placeholder', 'Password');
    await Saucedemo_Locators.userName(page).fill(userName);
    await Saucedemo_Locators.userPassword(page).fill(password);
    await Saucedemo_Locators.loginBtn(page).click();
  },


    async verifySubPageHeading(page) {
        await expect(Saucedemo_Locators.hamburger(page)).toBeVisible();
        await expect(Saucedemo_Locators.appLogo(page)).toHaveText("Swag Labs");
        await expect(Saucedemo_Locators.shoppingCart(page)).toBeVisible();
        await expect(Saucedemo_Locators.title(page)).toHaveText("Products");
        await expect(Saucedemo_Locators.dropdown(page)).toBeVisible();
    },

    async verifyProducts(page, itemName) {
        await expect(Saucedemo_Locators.inventoryItem(page).nth(0)).toBeVisible();
        await expect(Saucedemo_Locators.itemName(page).nth(0)).toHaveText('Sauce Labs Backpack');
        await expect(Saucedemo_Locators.itemPrice(page).nth(0)).toHaveText("$29.99");
        await expect(Saucedemo_Locators.addToCart(page)).toHaveText("Add to cart");
        await Saucedemo_Locators.addToCart(page).click();
        await expect(Saucedemo_Locators.cartIconNotification(page)).toHaveText("1");
        await expect(Saucedemo_Locators.removeBtn(page)).toHaveText("Remove");
        await Saucedemo_Locators.dropdown(page).click();
        const dropdown = page.locator('select.product_sort_container');
        await dropdown.waitFor({ state: 'visible' });  // wait until visible
        await dropdown.selectOption('hilo');
    },

    async verifyFooter(page) {
        await expect(Saucedemo_Locators.footer(page)).toBeVisible();
        await expect(Saucedemo_Locators.socialTwitter(page)).toBeVisible();
        await expect(Saucedemo_Locators.socialFacebook(page)).toBeVisible();
        await expect(Saucedemo_Locators.socialLinkedin(page)).toBeVisible();
    },

    async verifyAddCart(page) {
        await Saucedemo_Locators.shoppingCart(page).click();
        await expect(Saucedemo_Locators.headerSecondaryName(page)).toHaveText("Your Cart");
        await expect(Saucedemo_Locators.cartQtyLabel(page)).toHaveText("QTY");
        await expect(Saucedemo_Locators.description(page)).toHaveText("Description");
        await expect(Saucedemo_Locators.itemQty(page)).toHaveText("1");
        await expect(Saucedemo_Locators.itemName(page)).toHaveText("Sauce Labs Backpack");
        await expect(Saucedemo_Locators.itemDescription(page)).toHaveText("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.");
        await expect(Saucedemo_Locators.itemPrice(page)).toHaveText("$29.99");
        await expect(Saucedemo_Locators.removeBtn(page)).toBeVisible();
        await expect(Saucedemo_Locators.continueShopping(page)).toHaveText("Continue Shopping");
        await expect(Saucedemo_Locators.checkout(page)).toHaveText('Checkout');
        await Saucedemo_Locators.checkout(page).click();

    },

    async verifyYourInfoPage(page) {
        await expect(Saucedemo_Locators.title(page)).toHaveText("Checkout: Your Information");
        await expect(Saucedemo_Locators.firstName(page)).toHaveAttribute('placeholder', 'First Name');
        await expect(Saucedemo_Locators.lastName(page)).toHaveAttribute('placeholder', 'Last Name');
        await expect(Saucedemo_Locators.postalCOde(page)).toHaveAttribute('placeholder', 'Zip/Postal Code');
        await Saucedemo_Locators.firstName(page).fill("Arun");
        await Saucedemo_Locators.lastName(page).fill("Kumar");
        await Saucedemo_Locators.postalCOde(page).fill("623319");
        await Saucedemo_Locators.continueBTn(page).click();
    },

    async verifyCheckOutOverivew(page){
        await expect(Saucedemo_Locators.title(page)).toHaveText("Checkout: Overview");
        await expect(Saucedemo_Locators.cartQtyLabel(page)).toHaveText("QTY");
        await expect(Saucedemo_Locators.description(page)).toHaveText("Description");
        await expect(Saucedemo_Locators.itemQty(page)).toHaveText("1");
        await expect(Saucedemo_Locators.itemName(page)).toHaveText("Sauce Labs Backpack");
        await expect(Saucedemo_Locators.itemDescription(page)).toHaveText("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.");
        await expect(Saucedemo_Locators.itemPrice(page)).toHaveText("$29.99");
        await expect(Saucedemo_Locators.summaryInfoLabel(page)).toHaveText("Payment Information:");
        await expect(Saucedemo_Locators.paymentInfoValue(page)).toHaveText("SauceCard #31337");
        await expect(Saucedemo_Locators.shippingInfo(page)).toHaveText("Shipping Information:");
        await expect(Saucedemo_Locators.shippingInfoValue(page)).toHaveText("Free Pony Express Delivery!");
        await expect(Saucedemo_Locators.totalInfoLabel(page)).toHaveText("Price Total");
        await expect(Saucedemo_Locators.subTotalItem(page)).toHaveText("Item total: $29.99");
        await expect(Saucedemo_Locators.taxLabel(page)).toHaveText("Tax: $2.40");
        await expect(Saucedemo_Locators.summaryTotalLabel(page)).toHaveText("Total: $32.39");
        await expect(Saucedemo_Locators.finishBtn(page)).toHaveText("Finish");
        await Saucedemo_Locators.finishBtn(page).click();
    },

    async verifyCompletedStatus(page){
        await expect(Saucedemo_Locators.title(page)).toHaveText("Checkout: Complete!");
        await expect(Saucedemo_Locators.tickIcon(page)).toBeVisible();
        await expect(Saucedemo_Locators.completeHeader(page)).toHaveText("Thank you for your order!");
        await expect(Saucedemo_Locators.completeText(page)).toHaveText("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
        await expect(Saucedemo_Locators.backToProduct(page)).toHaveText("Back Home");
        await Saucedemo_Locators.backToProduct(page).click();
    },

     async verifySideMenu(page) {
        await Saucedemo_Locators.hamburger(page).click();
        await expect(Saucedemo_Locators.menu(page)).toBeVisible();
        await expect(Saucedemo_Locators.closeIcon(page)).toBeVisible();
        await expect(Saucedemo_Locators.sidebarLogout(page)).toHaveText("Logout");
        await Saucedemo_Locators.sidebarLogout(page).click();

    }

};

