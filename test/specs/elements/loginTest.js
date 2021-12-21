const basePage = require("../../pageObjects/BasePage")

var loginPage=require('../../pageObjects/LoginPage')
const expectChai=require('chai').expect

const fs=require('fs')
let logintesdata=JSON.parse(fs.readFileSync('test/testData/loginTest.json'))



describe('My Login application', function() {

    logintesdata.forEach(({username,password })=> {
        
    
    it('should login with valid credentials', async function() {

        await loginPage.launchUrl('https://devopssaas-qa.apps.tax/')
 
       
         await  browser.pause(5000);
       
         await browser.maximizeWindow();


         await loginPage.Login(username,password);
         const isDisplayed = await $("#relatedInformationViewToolbar .ng-binding").isDisplayed()
         await  browser.pause(5000);
         expectChai(isDisplayed).to.equal(true); // Chai assertion

         await basePage.acceptCookiePopupInPage();

   
     });

});


   
});