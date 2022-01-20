var basePage=require('../../pageObjects/BasePage')
var loginPage=require('../../pageObjects/LoginPage')
var workflowPage=require('../../pageObjects/WorkflowPage')
const expectChai=require('chai').expect

const fs=require('fs')
let logintesdata=JSON.parse(fs.readFileSync('test/testData/loginTest.json'));
let workflowTesdata=JSON.parse(fs.readFileSync('test/testData/workflowTest.json'));


describe('Workflow Scenarios', () => {
    
    it('Create Workflow', async () => {
                
        await workflowPage.clickOnWorkflowsModule();

        await basePage.acceptCookiePopupInPage();

        await workflowPage.clickOnCreateWorkflowButton();

        await browser.pause(5000);

        await workflowPage.selectTrackerWorkflowRadioButton();
        
        const dt = new Date();
        const workflowName = workflowTesdata.trackerWorkflow.workflowName + "-" +dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + (dt.getDate()-1)+"tax001";
        console.log('---------------------WorkflowName:'+workflowName);
        
        await workflowPage.enterWorkflowName(workflowName);
        await workflowPage.selectModuleAndLocation(workflowTesdata.trackerWorkflow.module,workflowTesdata.trackerWorkflow.location);

        await workflowPage.selectMasterObligations(workflowTesdata.trackerWorkflow.masterObligation);
        await workflowPage.clickOnDisbleDataMgmtCheck();
        await workflowPage.unselectIncludeControlCheckbox();
        await workflowPage.tr_enterDataInTheFirstRow(workflowTesdata.trackerWorkflow.firstTaskName,workflowTesdata.trackerWorkflow.firstTaskDescription ,
            workflowTesdata.trackerWorkflow.firstTaskPercentage , workflowTesdata.trackerWorkflow.firstTaskDueDate , workflowTesdata.trackerWorkflow.milestoneVal );
        
        await workflowPage.selectTaskTypeFirstRow(workflowTesdata.trackerWorkflow.firstRowTaskType);
        await workflowPage.deleteThirdRow();
        await workflowPage.deleteSecondRow();
        await workflowPage.selectRoleFirstRow(workflowTesdata.trackerWorkflow.selectRoleFirstRow);
        await workflowPage.selectReviewerRole( workflowTesdata.trackerWorkflow.selectReviewerRole);
        await workflowPage.publishTheWorkflow();
        await workflowPage.selectModuleInNavHeader(workflowTesdata.trackerWorkflow.module);
        await workflowPage.selectWorkflowTypeFromMenubar(workflowTesdata.trackerWorkflow.workflowTypeFilterFromHeader);
        const isWorkflowGridDisplayed = await $('//div[@role="grid"]//kendo-grid-list').isDisplayed();
        expectChai(isWorkflowGridDisplayed).to.equal(true);
        //await workflowPage.ExpectWorkflowGridDisplayed();
 
        await browser.pause(5000);
        
    }).timeout(1200000);


})


   
