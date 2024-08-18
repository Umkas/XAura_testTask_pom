class LoginPage {

    constructor(page){
        this.page = page;
        this.email_box = page.locator('//input[@class="bn-textField-input !w-[inherit]"]');
        this.pass_box = page.locator('//input[@class="bn-textField-input !w-[inherit]"]');
        this.next_button = page.locator('//button[@class="bn-button bn-button__primary data-size-large mt-6"]');
        this.emptyPass_error_message =  page.locator('//div[@class="bn-formItem-errMsg"]');
    }

    async inputEmail(email){
        await this.email_box.fill(email);
        await this.next_button.click();
    }

    async inputPass(pass){
        await this.pass_box.fill(pass);
        await this.next_button.click();
    }


    async gotoLoginPage(){
         await this.page.goto('https://accounts.binance.com/ru-UA/login');
    }


}

export default LoginPage;