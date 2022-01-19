class DataMgmtPage{

    get dataMgmtLink(){



        return $("//a[text()='Data Mgmt']")
    }




    get clickOnCreateContextButton(){



        return $(".fa-plus-circle")
    }


    get clickOnDataContextMgmt(){



        return $("//span[contains(text(),'Data Context Mgmt')]/..")
    }


    async clickOnDataMgmtLink() {
    
        await this.dataMgmtLink.click();
     
     }


     async clickOnCreateContext() {
    
        await this.clickOnCreateContextButton.click();
     
     }

     async clickOnnDataContextMgmtLNI() {
    
        await this.clickOnDataContextMgmt.click();
     
     }





     
    
}


module.exports =new DataMgmtPage()
    
    