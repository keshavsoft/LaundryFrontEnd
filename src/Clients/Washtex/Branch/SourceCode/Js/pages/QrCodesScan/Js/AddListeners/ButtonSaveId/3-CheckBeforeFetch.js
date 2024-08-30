let StartFunc = () => {
    let jVarLocalDCFactory = jFLocalFromDomDCFactoryTextId();
    let jVarLocalInputFactorySelectedId = jFLocalFromDomInputFactorySelectedId();
    
    if (jVarLocalInputFactorySelectedId === jVarLocalDCFactory) {
        return true;
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: `This item should be sent to ${jVarGlobalPresentViewData2.location}`
        });
    };

    return false;
};

let jFLocalFromDomInputFactorySelectedId = () => {
    let jVarLocalHtmlDCFactoryTextId = 'InputFactorySelectedId';
    let jVarHtmlDCFactoryTextId = document.getElementById(jVarLocalHtmlDCFactoryTextId);
    let jVarHtmlDCFactoryTextIdValue = jVarHtmlDCFactoryTextId.value.trim();
    return jVarHtmlDCFactoryTextIdValue;
};

let jFLocalFromDomDCFactoryTextId = () => {
    let jVarLocalHtmlDCFactoryTextId = 'DCFactoryTextId';
    let jVarHtmlDCFactoryTextId = document.getElementById(jVarLocalHtmlDCFactoryTextId);
    let jVarHtmlDCFactoryTextIdValue = jVarHtmlDCFactoryTextId.value.trim();
    return jVarHtmlDCFactoryTextIdValue;
};

export { StartFunc };