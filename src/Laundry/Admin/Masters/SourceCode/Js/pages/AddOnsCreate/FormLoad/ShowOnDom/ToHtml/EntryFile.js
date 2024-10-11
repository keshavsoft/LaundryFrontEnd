
let StartFunc = ({ inFetchData }) => {
    let jVarLocalForm = document.getElementById("FormId");

    const inputs = jVarLocalForm.querySelectorAll("input");

    console.log(inputs);
    for (const LoopInput of inputs) {
        console.log(LoopInput);
        if (LoopInput.name in inFetchData) {
            LoopInput.value = inFetchData[LoopInput.name];
        };
    };
};

export { StartFunc };