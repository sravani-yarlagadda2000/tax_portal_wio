describe('My Login application', function() {
    it('should login with valid credentials', async function() {

        
 
        await  browser.url('https://devopssaas-qa.apps.tax/');
        // receive url
       // console.log(browser.getUrl());
       await  browser.pause(5000);
       
       await browser.maximizeWindow();

   
    
    //     const elem =  $("//li[@class='active']/a[@href='/Home']")
    //    // const elem = $('#elem')
    //     elem.waitForClickable({ timeout: 60000 });
    //     console.log("trying to click on registry ");
        
    //     elem.click()
     const  multiTenancyMicrosoftLoginUsername=await  $("//input[@name='loginfmt']")
     const multiTenancyMicrosoftLoginPassword = $("//input[@name='Password']");
     const deloitteSignInButton = $(".//span[@class='submit']");
     const nextButton = $("//div//input[@value='Next']");

     let isDisplayed = await multiTenancyMicrosoftLoginUsername.isDisplayed();
     console.log("isDisplayedmultiTenancyMicrosoftLoginUsername--"+isDisplayed); // outputs: false
     if(isDisplayed){

           await multiTenancyMicrosoftLoginUsername.setValue('ussaasportalsvc@deloitte.com');
   
    }
    
    let  nextButtonIsDisplayed = await nextButton.isDisplayed();
    console.log("isDisplayednextButtonIsDisplayed--"+nextButtonIsDisplayed); // outputs: false
    if(nextButtonIsDisplayed){
        await  browser.pause(5000);
              await nextButton.click();
              await  browser.pause(10000);
      
    }

    let isPasswordDisplayed = await multiTenancyMicrosoftLoginPassword.isDisplayed();
    console.log("isDisplayedisPasswordDisplayed--"+isPasswordDisplayed); // outputs: false
    if(isPasswordDisplayed){
        await  browser.pause(5000);
   
              await multiTenancyMicrosoftLoginPassword.setValue('3_BPLr~wG#L)tvR*Q7w%<xeK');
              await  browser.pause(10000);
    }
    let  deloitteSignInButtonIsDisplayed = await deloitteSignInButton.isDisplayed();
    console.log("isDisplayeddeloitteSignInButtonIsDisplayed--"+deloitteSignInButtonIsDisplayed); // outputs: false
    if(deloitteSignInButtonIsDisplayed){
        await  browser.pause(5000);
              await deloitteSignInButton.click();
              await  browser.pause(10000);
    }






    });


   
});