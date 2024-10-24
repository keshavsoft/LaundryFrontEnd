let StartFunc = () => {
    let jVarLocalShowButtonClass = document.getElementById("DiscountPerId");
    console.log("jVarLocalShowButtonClass : ", jVarLocalShowButtonClass);
    jVarLocalShowButtonClass.addEventListener("onkeyup", processChange);
};

const processChange = debounce(() => saveInput());

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}
function saveInput() {
    console.log('Saving data');
};

export { StartFunc };