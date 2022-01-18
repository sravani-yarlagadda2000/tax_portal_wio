const BasePage = require("./BasePage")

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
        await this.tr_firstRowMilestoneUIInput.doubleClick();
        await browser.pause(1000);
        try {
            await $("//input[contains(@class,'k-textbox')]").setValue(milestoneVal);
        }catch(error){
            await this.tr_firstRowMilestoneUIInput.click();
            await browser.pause(1000);
            await $("//input[contains(@class,'k-textbox')]").setValue(milestoneVal);
        }
        
        await browser.keys("\uE007");
        
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
        await browser.pause(5000);
        await this.tr_firstRowUITaskTypeInput.doubleClick();
        await browser.pause(1000);
        try {
            await $("(//li[@role='option'])[contains(text(),'"+taskType+"')]").click();
        }catch(error){
            await browser.keys("\ue00c");
            await this.tr_firstRowUITaskTypeInput.doubleClick();
            await browser.pause(1000);
            await $("(//li[@role='option'])[contains(text(),'"+taskType+"')]").click();
        }
        
        await browser.pause(3000);
     }
    async selectRoleFirstRow (role) {
        await browser.pause(5000);
        await this.tr_firstRoleUIInput.doubleClick();
        await browser.pause(1000);
        try {
            await $("(//li[@role='option'])[contains(text(),'"+role+"')]").click();
        } catch(error){
            console.log('Error occured-'+error)
            await browser.keys("\ue00c");
            await this.tr_firstRoleUIInput.doubleClick();
            await browser.pause(1000);
            await $("(//li[@role='option'])[contains(text(),'"+role+"')]").click();
        }
        
        await browser.pause(3000);
     }
    async selectReviewerRole (role) { 
        await browser.pause(1000);
        await this.selectReviewerRoleInput.click();;
        await browser.pause(1000);
        await this.selectReviewerRoleInput.setValue(role);
        await $("(//li[@role='option'])[contains(text(),'"+role+"')]").click();
        await browser.pause(3000);
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