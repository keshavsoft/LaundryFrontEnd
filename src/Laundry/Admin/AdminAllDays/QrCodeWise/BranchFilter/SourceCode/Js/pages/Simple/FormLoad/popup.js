let StartFunc = () => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    if (jVarLocalBranchName === null || jVarLocalBranchName == "") {
        // swal.fire({
        //     title:"BranchName Null On Params",
        //     icon:"error",
        //     text:"no param"
        // });

        Swal.fire({
            title: "WelCome!",
            text: "Choose a BranchName",
            input: 'select',
            inputOptions: {
                'KKD': 'KKD',
                'ANR': 'ANR'
            },
            inputPlaceholder: 'Select a branch',
            showCancelButton: true,
            confirmButtonColor: 'green'
        }).then((result) => {
            if (result.value) {
                const jVarLocalBranchName = result.value;

                console.log("aaaaaaaa : ", jVarLocalBranchName);

                addURLSearchParams({ name: 'BranchName', value: jVarLocalBranchName });


                // let url = new URL("https://example.com?foo=1&bar=2");
                // let params = new URLSearchParams(url.search);

                // //Add a second foo parameter.
                // params.append("foo", 4);
            };
        });
    };
};

function addURLSearchParams(params) {
    const url = new URL(window.location.href);
    url.searchParams.set(params.name, params.value);
    window.location.href = url.href;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }