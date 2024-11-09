let StartFunc = () => {
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    if (jVarLocalBranchName === null || jVarLocalBranchName == "") {
        Swal.fire({
            title: "WelCome!",
            text: "Choose a BranchName",
            input: 'select',
            inputOptions: {
                'KKD': 'KKD',
                'ANR': 'ANR',
                'SP': 'SP'
            },
            inputPlaceholder: 'Select a branch',
            showCancelButton: true,
            confirmButtonColor: 'green'
        }).then((result) => {
            if (result.value) {
                const jVarLocalBranchName = result.value;

                localStorage.setItem("BranchName", jVarLocalBranchName);
            };
        });
    };
};

export { StartFunc };