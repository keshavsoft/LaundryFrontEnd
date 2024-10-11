let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");
    let jVarLocalRequiredElements = jVarLocalForm.querySelectorAll("[required]");
    let jVarLocalReturnTF = true;

    jVarLocalRequiredElements.forEach(LoopItem => {
        if (LoopItem.value.trim().length === 0) {
            LoopItem.classList.add("is-invalid");
            jVarLocalReturnTF = false;
            return;
        };
        if (LoopItem.value.trim().length > 0) {
            LoopItem.classList.remove("is-invalid");
        };
        if (LoopItem.name === 'Mobile') {
            if ((LoopItem.value.trim().length === 10) === false) {
            document.getElementById("MobileClass").innerHTML = "must be 10";
            LoopItem.classList.add("is-invalid");
                LoopItem.focus();
                jVarLocalReturnTF = false;
                return;
            }
        };
       
    });

    return jVarLocalReturnTF;
};

export { StartFunc };