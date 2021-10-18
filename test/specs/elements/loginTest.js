var loginPage=require('../../pageObjects/LoginPage')


describe('My Login application', function() {
    it('should login with valid credentials', async function() {

        await loginPage.launchUrl('https://devopssaas-qa.apps.tax/')
 
       
       await  browser.pause(5000);
       
       await browser.maximizeWindow();


       await loginPage.Login();

   
    
    


    });


   
});