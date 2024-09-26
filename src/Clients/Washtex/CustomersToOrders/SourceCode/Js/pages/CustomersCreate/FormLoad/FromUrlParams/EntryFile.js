let StartFunc = () => {
    localBranchInputFunc();
    let jVarLocalBranchId = 'BranchNameId';
    let jVarlocalBranch = document.getElementById(jVarLocalBranchId);
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    if (jVarlocalBranch === null === false) {
        jVarlocalBranch.innerHTML = jVarLocalBranchName;
    };
};

let localBranchInputFunc = () =>  {
    
    let jVarLocalBranchId='BranchName';
    let jVarlocalBranch=document.getElementById(jVarLocalBranchId);
    let jVarLocalBranchName=localStorage.getItem("BranchName");

    if(jVarlocalBranch===null===false){
        jVarlocalBranch.value=jVarLocalBranchName;
    }


};

export { StartFunc }