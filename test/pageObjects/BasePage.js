
class BasePage{

    get acceptCookiePopup(){



        return $("(//button[contains(text(),'Accept optional cookies')])[2]")
    }


    get switchClientButton(){



        return $("[title='Switch Client'] .fa")
    }

    get selectClientDropdown(){



        return $("#s2id_drpSelectClients")
    }

    get switchButton(){



        return $("[ng-click='setSelectedClient()']")
    }

    get moduleDropdown(){



        return $("s2id_TaxProcessMod")
    }


    get moduleDropdownInputField(){



        return $("//input[@id='s2id_autogen9_search']")
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



        return $("//*[@id='s2id_Jurisdiction']/ul/li[1]/div")
    }



    get acceptCookiePopup(){



        return $("(//button[contains(text(),'Accept optional cookies')])[2]")
    }



    async acceptCookiePopupInPage() {
    
        await this.acceptCookiePopup.click();
     
     }



     async changeModule() {
    
        await this.acceptCookiePopup.click();
     
     }



     
     async changeLocation() {
    
        await this.acceptCookiePopup.click();
     
     }




    }
    
    module.exports =new BasePage()
    
    