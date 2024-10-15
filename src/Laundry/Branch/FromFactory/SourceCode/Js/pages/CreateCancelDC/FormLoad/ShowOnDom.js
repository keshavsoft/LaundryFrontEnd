const StartFunc = () => {
    jFLocalToInputDate();
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

let jFLocalToInputDate = () => {
    let jVarLocalHtmlId = "Date";
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString().slice(0, 10);

    let jVarLocalMenItemsTabId = document.getElementById(jVarLocalHtmlId);
    jVarLocalMenItemsTabId.value = formattedDate;
};

export { StartFunc };
