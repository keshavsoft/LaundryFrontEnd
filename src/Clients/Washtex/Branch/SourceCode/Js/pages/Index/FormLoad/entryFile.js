const StartFunc = () => {
    console.log("aaaaaaaaaaaa");

    let jVarLocalTemplateFromHtml = document.getElementById('TemplateForActivityId');
    let clone = jVarLocalTemplateFromHtml.content.cloneNode('true');
    clone.querySelector(".activite-label").innerHTML = "aa";
    const s = new XMLSerializer();
    const str = s.serializeToString(clone);
    console.log("aaaaaaaaaa : ", s, str);
    let jVarLocalk1 = document.getElementById('k1');
    // jVarLocalk1.appendChild(clone);

    jVarLocalk1.insertBefore(clone, jVarLocalk1.childNodes[0])
};

export { StartFunc };