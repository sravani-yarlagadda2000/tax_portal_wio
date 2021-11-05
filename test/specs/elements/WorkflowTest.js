
var loginPage=require('../../pageObjects/LoginPage')
const expectChai=require('chai').expect

const fs=require('fs')
let logintesdata=JSON.parse(fs.readFileSync('test/testData/loginTest.json'))



describe('workflow Page ', function() {

    
        
    
    it('create workflow ', async function() {

    
          await $("=Workflows").click();
          await  browser.pause(5000);
          await $()
     
   
    });




   
});