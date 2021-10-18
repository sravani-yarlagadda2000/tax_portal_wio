var loginPage=require('../../pageObjects/LoginPage')
const expectChai=require('chai').expect


describe('My Login application', function() {
    it('should login with valid credentials', async function() {

        await loginPage.launchUrl('https://devopssaas-qa.apps.tax/')
 
       
         await  browser.pause(5000);
       
         await browser.maximizeWindow();


         await loginPage.Login();
         const isDisplayed = await $("#relatedInformationViewToolbar .ng-binding").isDisplayed()
         await  browser.pause(5000);
         expectChai(isDisplayed).to.equal(true); // Chai assertion

   
    
    


    });


   
});