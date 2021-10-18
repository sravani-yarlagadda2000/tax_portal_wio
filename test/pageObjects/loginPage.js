
class LoginPage{

//userName=$("input[name='userName']")

get multiTenancyMicrosoftLoginUsername()
{
    return $("//input[@name='loginfmt']")
}
get multiTenancyMicrosoftLoginPassword()
{
    return $("//input[@name='Password']")
}

get deloitteSignInButton(){



return $(".//span[@class='submit']")


}


get nextButton(){



    return $("//div//input[@value='Next']")
}

get myDashboard(){



    return $("#relatedInformationViewToolbar .ng-binding")
}


get switchClientButton(){



    return $("[title='Switch Client'] .fa")
}

get moduleDropdown(){



    return $("s2id_TaxProcessMod")
}

get moduleDropdownInputField(){



    return $("s2id_autogen9_search")
}
get moduleResult(){



    return $(".select2-result-label")
}


get showFilterButton(){



    return $("[ng-click='showFilter()']")
}

get locationFilterInputField(){



    return $("#s2id_Jurisdiction .select2-search-field")
}



get locationResult(){



    return $(".select2-drop-mask")
}


get locationNameAlreadySelected(){



    return $(".select2-drop-mask")
}





async launchUrl(url) {

   await  browser.url(url);

}


async Login()
{

        
    let isDisplayed = await this.multiTenancyMicrosoftLoginUsername.isDisplayed();
    console.log("isDisplayedmultiTenancyMicrosoftLoginUsername--"+isDisplayed); // outputs: false
    if(isDisplayed){

          await this.multiTenancyMicrosoftLoginUsername.setValue('ussaasportalsvc@deloitte.com');
  
   }
   
   let  nextButtonIsDisplayed = await this.nextButton.isDisplayed();
   console.log("isDisplayednextButtonIsDisplayed--"+nextButtonIsDisplayed); // outputs: false
   if(nextButtonIsDisplayed){
       await  browser.pause(5000);
             await this.nextButton.click();
             await  browser.pause(10000);
     
   }

   let isPasswordDisplayed = await this.multiTenancyMicrosoftLoginPassword.isDisplayed();
   console.log("isDisplayedisPasswordDisplayed--"+isPasswordDisplayed); // outputs: false
   if(isPasswordDisplayed){
       await  browser.pause(5000);
  
             await this.multiTenancyMicrosoftLoginPassword.setValue('3_BPLr~wG#L)tvR*Q7w%<xeK');
             await  browser.pause(10000);
   }
   let  deloitteSignInButtonIsDisplayed = await this.deloitteSignInButton.isDisplayed();
   console.log("isDisplayeddeloitteSignInButtonIsDisplayed--"+deloitteSignInButtonIsDisplayed); // outputs: false
   if(deloitteSignInButtonIsDisplayed){
       await  browser.pause(5000);
             await this.deloitteSignInButton.click();
             await  browser.pause(10000);
   }
    
}


}

module.exports =new LoginPage()

