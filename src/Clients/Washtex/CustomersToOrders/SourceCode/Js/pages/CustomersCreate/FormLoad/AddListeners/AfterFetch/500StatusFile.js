import ConfigJson from '../../../Config.json' with {type: 'json'};

let StartFunc = ({ inResponse, inBodyData }) => {
    Swal.fire({
        title: "Error Alert",
        text: `${inResponse}`,
        icon: "error",
        confirmButtonColor: "#3085d6",
    }).then((result) => {
        if (result.isConfirmed || result.isDismissed) {
            const jVarLocalRedirectUrl = ConfigJson.SaveButton.NewOrder['500Status'].RedirectUrl;

            const url = new URL(window.location.href);
            const params1 = new URLSearchParams(url.search);
            let NewURl = new URL(jVarLocalRedirectUrl, url);
            const new_url = new URL(`${NewURl.href}?${params1}`);
            new_url.searchParams.append('CustomerMobile', inBodyData.CustomerName);
            new_url.searchParams.append('CustomerName', inBodyData.Mobile);

            window.location.href = new_url.href;
        }
    });
};


export { StartFunc }