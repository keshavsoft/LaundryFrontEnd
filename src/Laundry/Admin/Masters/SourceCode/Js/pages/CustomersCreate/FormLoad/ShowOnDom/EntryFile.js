const StartFunc = () => {
    jFLocalToInputBranchName();
};

let jFLocalToInputBranchName = () => {
    let jVarLocalFromBranchName = localStorage.getItem("BranchName");

    let jVarLocalHtmlId = 'BranchName';
    let jVarLocalBranchName = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBranchName === null === false) {
        jVarLocalBranchName.value = jVarLocalFromBranchName;
    };
};


export { StartFunc };
