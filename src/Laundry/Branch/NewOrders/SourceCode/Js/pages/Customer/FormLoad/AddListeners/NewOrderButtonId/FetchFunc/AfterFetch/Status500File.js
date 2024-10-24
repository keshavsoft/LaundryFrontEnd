import ConfigJson from '../../../../../Config.json' with {type: 'json'};

let StartFunc = ({ inresponse }) => {
    Swal.fire({
        title: "Error Alert",
        text: `${inresponse}`,
        icon: "error",
        confirmButtonColor: "#3085d6",
        showDenyButton: true,
        denyButtonText: `Add Items`,
        denyButtonColor: "#008000",
    }).then((result) => {
        if (result.isConfirmed || result.isDismissed) {
            window.location.href = "";
        };
        
        if (result.isDenied) {
            window.location.href = ConfigJson.Urls.NewOrderButtonId.RedirectUrl['500Status'];
        };
    });
};

export { StartFunc };