const BasePage = require("./BasePage")

const ENTER_KEY = "\uE007";

class WorkflowPage{

    get workflowModuleNav () { return $('//a[contains(@href,"workflow") and contains(text(),"Workflows")]') }
    get createWorkflowButton () { return $('ul.nav.main-menu a[title="Create Workflow"]>i') }
    get trackerWorkflowRadioButton () {return $('//b[text()="Tracker Workflow"]/preceding-sibling::input')}
    get worflowName () {return $("input[name='wfName'][formcontrolname='workflowName']")}
    get moduleField () {return $("//label[contains(text(),'Module')]//parent::div//kendo-searchbar[@class='k-searchbar']//input")}
    get masterObligationsField () { return $("//label[contains(text(),'Master Obligations')]//parent::div//kendo-searchbar[@class='k-searchbar']//input")}
    get includeControlCheckbox () { return $("(.//*[@id='ckincludeSox'])[1]")}
    get tr_firstRowUIDescriptionInput () { return $("(//div[@class='k-grid-aria-root']//tr[1])[2]//td[4]")}
    get tr_firstRowUITasksInput () { return $("(//div[@class='k-grid-aria-root']//tr[1])[2]//td[3]")}
    get tr_firstRowUITaskTypeInput () { return $("(//div[@class='k-grid-aria-root']//tr[1])[2]//td[5]")}
    get tr_firstPercentageUIInput () { return $("(//div[@class='k-grid-aria-root']//tr[1])[2]//td[6]")}
    get tr_firstDueDateOffsetUIInput () { return $("(//div[@class='k-grid-aria-root']//tr[1])[2]//td[8]")}
    get tr_firstRoleUIInput () { return $("(//div[@class='k-grid-aria-root']//tr[1])[2]//td[12]")}
    get tr_firstRowMilestoneUIInput () { return $("//div[@class='k-grid-table-wrap']//tr[1]//td[2]")}
    //second row
    get tr_secondRowUIDescriptionInput () { return $("(//div[@class='k-grid-aria-root']//tr)[3]/td[4]")}
    get tr_secondRowUITasksInput () { return $("(//div[@class='k-grid-aria-root']//tr)[3]//td[3]")}
    get tr_secondRowUITaskTypeInput () { return $("(//div[@class='k-grid-aria-root']//tr)[3]//td[5]")}
    get tr_secondPercentageUIInput () { return $("(//div[@class='k-grid-aria-root']//tr)[3]//td[6]")}
    get tr_secondDueDateOffsetUIInput () { return $("(//div[@class='k-grid-aria-root']//tr)[3]//td[8]")}
    get tr_secondRoleUIInput () { return $("(//div[@class='k-grid-aria-root']//tr)[3]//td[12]")}
    get tr_secondRowMilestoneUIInput () { return $("//div[@class='k-grid-table-wrap']//tr[2]//td[2]")}
    //third row
    get tr_thirdRowUIDescriptionInput () { return $("(//div[@class='k-grid-aria-root']//tr)[4]//td[4]")}
    get tr_thirdRowUITasksInput () { return $("(//div[@class='k-grid-aria-root']//tr)[4]//td[3]")}
    get tr_thirdRowUITaskTypeInput () { return $("(//div[@class='k-grid-aria-root']//tr)[4]//td[5]")}
    get tr_thirdPercentageUIInput () { return $("(//div[@class='k-grid-aria-root']//tr)[4]//td[6]")}
    get tr_thirdDueDateOffsetUIInput () { return $("(//div[@class='k-grid-aria-root']//tr)[4]//td[8]")}
    get tr_thirdRoleUIInput () { return $("(//div[@class='k-grid-aria-root']//tr)[4]//td[12]")}
    get tr_thirdRowMilestoneUIInput () { return $("//div[@class='k-grid-table-wrap']//tr[3]//td[2]")}
    
    get tr_secondRowInputCheckbox () { return $('//table[@class="k-grid-table"]//tr[2]/td[1]/input')}
    get tr_thirdRowInputCheckbox () { return $('//table[@class="k-grid-table"]//tr[3]/td[1]/input') }
    
    get removeRowButton () { return $("[title='Remove Row'] .fa-minus-circle")}
    get selectReviewerRoleInput () { return $('kendo-multiselect[formcontrolname="reviewerRoleTypes"] input')}
    get publishButton() { return $('li>a[title="Publish"]>i')}
    get moduleSelectDropdownNavHeader () {return $('nav.main-header kendo-dropdownlist span.k-select')}
    get workflowTypeMenuBarDropdownIcon () { return $('//ul[@role="menubar"]//li//span[@role="presentation" and contains(@class,"k-icon")]')}
    
    
    enterTaskName(){
    this.taskName.setValue(userName)
    }
    
    
    async WaitForVisible(element,timeout){ browser.waitForVisible(element, timeout);} 
    
    async clickOnWorkflowsModule() {
        await browser.pause(5000);
        //await this.WaitForVisible(this.worflowName,30000);
        await this.workflowModuleNav.click();
        await browser.pause(30000);
     }
    async clickOnCreateWorkflowButton() { await this.createWorkflowButton.click(); }
    async selectTrackerWorkflowRadioButton () { await this.trackerWorkflowRadioButton.click(); }
    async selectModuleAndLocation(module, location) {
        await this.moduleField.click();
        await this.moduleField.setValue(module);
        await browser.pause(2000);
        await $("//li[text()='"+module+"']").click()
        await browser.pause(2000);

        //select location
        await $("//li[contains(@class,'location-list-item')]/label[text()='"+location+"']/preceding-sibling::input").click();
     }
    async selectMasterObligations(obligation) {
        await this.masterObligationsField.click();
        await this.masterObligationsField.setValue(obligation);
        await browser.pause(2000);
        await $("(//li[@role='option'])[contains(text(),'"+obligation+"')]").click();
        await browser.pause(2000);
    }
    async enterWorkflowName (workflowName) { await this.worflowName.setValue(workflowName); }
    async unselectIncludeControlCheckbox() { await this.includeControlCheckbox.click(); }
    async clickOnDisbleDataMgmtCheck () {
         
       const includeControlCheckboxDisplayed =  $("(//input[@id='canMoveToBDM'])[1]").isDisplayed(); 
            if (includeControlCheckboxDisplayed) {
                $("(//input[@id='canMoveToBDM'])[1]").click();
            }
        
     }
    async tr_enterDataInTheFirstRow (firstTaskName, firstTaskDescription,
        firstTaskPercentage, firstTaskDueDate, milestoneVal) {
        await browser.pause(1000);
        await this.tr_firstRowUIDescriptionInput.doubleClick();

        await browser.pause(3000);
        await $("//input[contains(@class,'k-textbox')]").setValue(firstTaskDescription);
        await browser.pause(1000);
        await this.tr_firstRowUITasksInput.doubleClick();
        await browser.pause(1000);
        try {
            await $("//input[contains(@class,'k-textbox')]").setValue(firstTaskName);
        }catch(error){
            await this.tr_firstRowUITasksInput.click();
            await browser.pause(1000);
            await $("//input[contains(@class,'k-textbox')]").setValue(firstTaskName);
        }
        
        await browser.pause(1000);
        await this.tr_firstPercentageUIInput.doubleClick();
        await browser.pause(1000);
        try {
            await $("//input[contains(@class,'k-textbox')]").setValue(firstTaskPercentage);
        }catch(error){
            await this.tr_firstPercentageUIInput.click();
            await browser.pause(1000);
            await $("//input[contains(@class,'k-textbox')]").setValue(firstTaskPercentage);
        }
        
        await browser.pause(1000);
        await this.tr_firstDueDateOffsetUIInput.doubleClick();
        await browser.pause(1000);
        try {
            await $("//input[contains(@class,'k-textbox')]").setValue(firstTaskDueDate);
        }catch(error){
            await this.tr_firstDueDateOffsetUIInput.click();
            await browser.pause(1000);
            await $("//input[contains(@class,'k-textbox')]").setValue(firstTaskDueDate);
        }
        
        await browser.pause(1000);
        await this.tr_firstRowMilestoneUIInput.click();
        await browser.pause(1000);
        await this.tr_firstRowMilestoneUIInput.$("span[class*='k-icon']").click();
        await $("//input[contains(@class,'k-textbox')]").setValue(milestoneVal);
       
        await browser.keys(ENTER_KEY);
        
        await browser.pause(3000);
    }
    
    async tr_enterDataInTheSecondRow (secondTaskName, secondTaskDescription,
        secondTaskPercentage, secondTaskDueDate, secondMilestoneVal) {
        await browser.pause(1000);
        await this.tr_secondRowUIDescriptionInput.doubleClick();

        await browser.pause(3000);
        await $("//input[contains(@class,'k-textbox')]").setValue(secondTaskDescription);
        await browser.pause(1000);
        await this.tr_secondRowUITasksInput.doubleClick();
        await browser.pause(1000);
        try {
            await $("//input[contains(@class,'k-textbox')]").setValue(secondTaskName);
        }catch(error){
            await this.tr_secondRowUITasksInput.click();
            await browser.pause(1000);
            await $("//input[contains(@class,'k-textbox')]").setValue(secondTaskName);
        }
        
        await browser.pause(1000);
        await this.tr_secondPercentageUIInput.doubleClick();
        await browser.pause(1000);
        try {
            await $("//input[contains(@class,'k-textbox')]").setValue(secondTaskPercentage);
        }catch(error){
            await this.tr_secondPercentageUIInput.click();
            await browser.pause(1000);
            await $("//input[contains(@class,'k-textbox')]").setValue(secondTaskPercentage);
        }
        
        await browser.pause(1000);
        await this.tr_secondDueDateOffsetUIInput.doubleClick();
        await browser.pause(1000);
        try {
            await $("//input[contains(@class,'k-textbox')]").setValue(secondTaskDueDate);
        }catch(error){
            await this.tr_secondDueDateOffsetUIInput.click();
            await browser.pause(1000);
            await $("//input[contains(@class,'k-textbox')]").setValue(secondTaskDueDate);
        }
        
        await browser.pause(1000);
        await this.tr_secondRowMilestoneUIInput.click();
        await browser.pause(1000);
        await this.tr_secondRowMilestoneUIInput.$("span[class*='k-icon']").click();
        await $("//input[contains(@class,'k-textbox')]").setValue(secondMilestoneVal);

        await browser.keys(ENTER_KEY);
        await browser.pause(3000);
    }

    async tr_enterDataInTheThirdRow (thirdTaskName, thirdTaskDescription,
        thirdTaskPercentage, thirdTaskDueDate, thirdMilestoneVal) {
        await browser.pause(1000);
        await this.tr_thirdRowUIDescriptionInput.doubleClick();

        await browser.pause(3000);
        await $("//input[contains(@class,'k-textbox')]").setValue(thirdTaskDescription);
        await browser.pause(1000);
        await this.tr_thirdRowUITasksInput.doubleClick();
        await browser.pause(1000);
        try {
            await $("//input[contains(@class,'k-textbox')]").setValue(thirdTaskName);
        }catch(error){
            await this.tr_thirdRowUITasksInput.click();
            await browser.pause(1000);
            await $("//input[contains(@class,'k-textbox')]").setValue(thirdTaskName);
        }
        
        await browser.pause(1000);
        await this.tr_thirdPercentageUIInput.doubleClick();
        await browser.pause(1000);
        try {
            await $("//input[contains(@class,'k-textbox')]").setValue(thirdTaskPercentage);
        }catch(error){
            await this.tr_thirdPercentageUIInput.click();
            await browser.pause(1000);
            await $("//input[contains(@class,'k-textbox')]").setValue(thirdaskPercentage);
        }
        
        await browser.pause(1000);
        await this.tr_thirdDueDateOffsetUIInput.doubleClick();
        await browser.pause(1000);
        try {
            await $("//input[contains(@class,'k-textbox')]").setValue(thirdTaskDueDate);
        }catch(error){
            await this.tr_thirdDueDateOffsetUIInput.click();
            await browser.pause(1000);
            await $("//input[contains(@class,'k-textbox')]").setValue(thirdTaskDueDate);
        }
        
        await browser.pause(1000);
        await this.tr_thirdRowMilestoneUIInput.click();
        await browser.pause(1000);
        await this.tr_thirdRowMilestoneUIInput.$("span[class*='k-icon']").click();
        await $("//input[contains(@class,'k-textbox')]").setValue(thirdMilestoneVal);

        await browser.keys(ENTER_KEY);
        await browser.pause(3000);
    }

    async deleteThirdRow () { 
        await this.tr_thirdRowInputCheckbox.click();
        await browser.pause(2000);
        await this.removeRowButton.click();
        await browser.pause(3000);
    }
    async deleteSecondRow () {
        await this.tr_secondRowInputCheckbox.click();
        await browser.pause(2000);
        await this.removeRowButton.click();
        await browser.pause(3000);
    }
    async selectTaskTypeFirstRow (taskType) {
        await browser.pause(1000);
        await this.tr_firstRowUITaskTypeInput.click();
        await browser.pause(1000);
        await this.tr_firstRowUITaskTypeInput.$("span[class*='k-icon']").click();
        
        await $("(//li[@role='option'])[contains(text(),'"+taskType+"')]").click();
        
        await browser.pause(1000);
     }
     async selectTaskTypeSecondRow (taskType) {
        await browser.pause(1000);
        await this.tr_secondRowUITaskTypeInput.click();
        await browser.pause(1000);
        await this.tr_secondRowUITaskTypeInput.$("span[class*='k-icon']").click();
        
        await $("(//li[@role='option'])[contains(text(),'"+taskType+"')]").click();
        
        await browser.pause(1000);
     }
     async selectTaskTypeThirdRow (taskType) {
        await browser.pause(1000);
        await this.tr_thirdRowUITaskTypeInput.click();
        await browser.pause(1000);
        await this.tr_thirdRowUITaskTypeInput.$("span[class*='k-icon']").click();
        
        await $("(//li[@role='option'])[contains(text(),'"+taskType+"')]").click();
        
        await browser.pause(1000);
     }
    async selectRoleFirstRow (role) {
        await browser.pause(1000);
        await this.tr_firstRoleUIInput.click();
        await browser.pause(1000);
        await this.tr_firstRoleUIInput.$("span[class*='k-icon']").click();
        
        await $("(//li[@role='option'])[contains(text(),'"+role+"')]").click(); 
        await browser.pause(1000);
     }
     async selectRoleSecondRow (role) {
        await browser.pause(1000);
        await this.tr_secondRoleUIInput.click();
        await browser.pause(1000);
        await this.tr_secondRoleUIInput.$("span[class*='k-icon']").click();
        
        await $("(//li[@role='option'])[contains(text(),'"+role+"')]").click(); 
        await browser.pause(1000);
     }
     async selectRoleThirdRow (role) {
        await browser.pause(1000);
        await this.tr_thirdRoleUIInput.click();
        await browser.pause(1000);
        await this.tr_thirdRoleUIInput.$("span[class*='k-icon']").click();
        
        await $("(//li[@role='option'])[contains(text(),'"+role+"')]").click(); 
        await browser.pause(1000);
     }
    async selectReviewerRole (role) { 
        await browser.pause(1000);
        await this.selectReviewerRoleInput.click();;
        await browser.pause(1000);
        await this.selectReviewerRoleInput.setValue(role);
        await $("(//li[@role='option'])[contains(text(),'"+role+"')]").click();
        await browser.pause(1000);
    }
    
    async publishTheWorkflow () { 
        await browser.pause(3000);
        await this.publishButton.click();
        await browser.pause(5000);
    }

    async selectModuleInNavHeader(module) {
        await browser.pause(2000);
        await this.moduleSelectDropdownNavHeader.click();
        await $('//ul[@role="listbox"]//li[text()="'+module+'"]').click();
        await browser.pause(2000);
    }

    async selectWorkflowTypeFromMenubar(type){
        await browser.pause(1000);
        await this.workflowTypeMenuBarDropdownIcon.click();
        await browser.pause(2000);
        await $('//a[contains(text(),"'+type+'")]').click();
        await browser.pause(5000);

    }
    //async ExpectWorkflowGridDisplayed () { }
    
    
    }
    
    //export default new WorkflowPage()
    module.exports = new WorkflowPage();