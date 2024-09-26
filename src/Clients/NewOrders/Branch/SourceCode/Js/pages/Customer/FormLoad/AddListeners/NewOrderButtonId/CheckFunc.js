import JsonConfig from "../../../Config.json" with{type: "json"};

let StartFunc = async () => {
    let jvarLocalCustomerNameInputId = document.getElementById("CustomerNameInputId");
    if (jvarLocalCustomerNameInputId.value === "") {
        jvarLocalCustomerNameInputId.classList.add("is-invalid");
        return false;

    };

    let LocalFech = await LocalFetchFunc();
    console.log('LocalFech:', LocalFech);

    if (LocalFech === false) {
        jvarLocalCustomerNameInputId.classList.add("is-invalid");

        return false;
    };

    return true;
};

const LocalFetchFunc = async () => {
    let jvarLocalCustomerNameInputId = document.getElementById("CustomerNameInputId").value;
    let jVarLocalMobileValue = jvarLocalCustomerNameInputId.split(":")[1]

    let jVarLocalfetchUrl = `/${JsonConfig.routePath}/MastersCustomers/Show/Filter/Mobile/${jVarLocalMobileValue}`
    let response = await fetch(jVarLocalfetchUrl);

    if (response.status === 500) {
        return false;
    };

    return true;
}

export { StartFunc }