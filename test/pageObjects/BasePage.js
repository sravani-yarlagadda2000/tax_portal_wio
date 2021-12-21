
var selectedLocation;

class BasePage{

    

    get acceptCookiePopup(){



        return $("(//button[contains(text(),'Accept optional cookies')])[2]")
    }


    get switchClientButton(){



        return $("[title='Switch Client'] .fa")
    }

    get selectClientDropdownButton(){



        return $("#s2id_drpSelectClients")
    }

    get switchButton(){



        return $("[ng-click='setSelectedClient()']")
    }

    get moduleDropdown(){



        return $("#s2id_TaxProcessMod")
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

    get locationFilterInputField(){



        return $("#s2id_Jurisdiction .select2-search-field")
    }




    get acceptCookiePopup(){



        return $("(//button[contains(text(),'Accept optional cookies')])[2]")
    }



    async acceptCookiePopupInPage() {
    
        await this.acceptCookiePopup.click();
     
     }




     async switchClient() {
    
        await this.switchClientButton.click();
     
     }


     async selectClientDropdown() {
    
        await this.selectClientDropdownButton.click();
     
     }



     async enterClientName(clientName) {
    
        

         await    $("(//*[@class='select2-result-label'])[contains(text(),'"+clientName+"')]").click();
    }


    async clientSubmit() {
    
        

        await    this.switchButton.click();
   }



   async clickModuleDropdown(){


    await    this.moduleDropdown.click();


   }
    async selectModule(module){


      await this.moduleDropdownInputField.setValue(module);



   }

   async submitModule(){


    await this.moduleResult.click();



 }



 async clickOnShowFilterButton(){


    await this.showFilterButton.click();



 }





 async chooseLocationFromFilters(location){


    var result = this.locationNameAlreadySelected.getText();

      if(result=='All'){

           this.locationFilterInputField.click();
           $("(.//div[@class='select2-result-label'])[contains(text(),'"+ location + "')]").click();


        }else if(result==location){
            console.log(result + " is already selected");
            this.clickOnShowFilterButton();


        }else if(result!==location){

            this.locationFilterInputField.click();
            $("(.//div[@class='select2-result-label'])[contains(text(),'"+ location + "')]").click();


         }

 }

    
}


  

module.exports =new BasePage()
    
    