const workflowPage = require('./pageObjects/WorkflowPage.js');

describe('create workflow', function() {
    it('should login with valid credentials', function() {
        
   workflowPage.enterTaskName("preparer");
            
    });
});