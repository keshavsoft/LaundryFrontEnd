let StartFunc = () => {
    let jVarLocalBranchId = 'FactoryNameId';
    let jVarlocalBranch = document.getElementById(jVarLocalBranchId);
    let jVarLocalBranchName = localStorage.getItem("FactoryName");

    if (jVarlocalBranch === null === false) {
        jVarlocalBranch.innerHTML = jVarLocalBranchName;
    };
};

export { StartFunc }