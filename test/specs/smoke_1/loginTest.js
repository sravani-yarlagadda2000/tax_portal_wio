var basePage=require('../../pageObjects/BasePage')
var loginPage=require('../../pageObjects/LoginPage')
const expectChai=require('chai').expect

const fs=require('fs')
let logintesdata=JSON.parse(fs.readFileSync('test/testData/loginTest.json'))



describe('Login application', function() {

    logintesdata.forEach(({applicatioUrl,username,password,client,module,location })=> {
        
    
    it('Login Test', async function() {

        await loginPage.launchUrl(applicatioUrl);
        await  browser.pause(5000);
        await browser.maximizeWindow();
        await loginPage.Login(username,password);
        const isDisplayed = await $("#relatedInformationViewToolbar .ng-binding").isDisplayed();
        await  browser.pause(5000);
         expectChai(isDisplayed).to.equal(true); // Chai assertion
         await basePage.acceptCookiePopupInPage();
         await basePage.switchClient();     
         await basePage.selectClientDropdown();
         await basePage.enterClientName(client);
         await  basePage.clientSubmit();
         await basePage.clickModuleDropdown();
         await basePage.selectModule(module);
         await basePage.submitModule();
         await basePage.clickOnShowFilterButton();
         await basePage.chooseLocationFromFilters(location);
         await browser.pause(5000);

        });

});


});