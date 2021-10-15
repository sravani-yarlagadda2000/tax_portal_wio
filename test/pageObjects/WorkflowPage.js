class WorkflowPage{


get worflowName(){
return $("input[name='wfname']")
}


get taskName(){

    return $("inout[name='taskName']")
}

enterTaskName(){
this.taskName.setValue(userName)
}



}

module.exports= new WorkflowPage()


