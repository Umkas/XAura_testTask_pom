import { test, expect } from '@playwright/test';
import LoginPage  from '../pages/BinanceLoginPage';


//checking "enter password" notice after clicking "Enter" with correct email and empty password field
test('test', async ({ page }) => {
    const BinanceLogin = new LoginPage(page);
    await BinanceLogin.gotoLoginPage();
    await expect(BinanceLogin.email_box).toBeVisible();
    await BinanceLogin.inputEmail('umkauskas@gmail.com');
    await expect(BinanceLogin.pass_box).toBeVisible();
    await BinanceLogin.inputPass('');
    await expect(BinanceLogin.emptyPass_error_message).toBeVisible();
});