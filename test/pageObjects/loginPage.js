const { default: $ } = require("webdriverio/build/commands/browser/$");
var config= require('./properties/config.js')


//var microsoftLogin = "microsoft";
var loginURL = config.applicationURL
var userName = config.userName
var password = config.password
var clientName = config.clientName
var module = config.module
var location = config.location




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





launchUrl(url)
{

    browser.url(url);
    
}


Login(userName,password, url)
{

        this.launchUrl(url)
        this.userName.setValue(userName)
        this.password.setValue(password)
        this.signIn.click()
    
}


}

module.exports= new LoginPage()

