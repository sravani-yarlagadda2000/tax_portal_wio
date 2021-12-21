
class BasePage{

    get acceptCookiePopup(){



        return $("(//button[contains(text(),'Accept optional cookies')])[2]")
    }
    
    
    async acceptCookiePopupInPage() {
    
        await this.acceptCookiePopup.click();
     
     }
    
    
    }
    
    module.exports =new BasePage()
    
    