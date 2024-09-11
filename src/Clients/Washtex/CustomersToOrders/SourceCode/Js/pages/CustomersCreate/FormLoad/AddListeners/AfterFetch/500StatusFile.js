let StartFunc = ({ inResponse }) => {
    Swal.fire({
        title: "Error Alert",
        text: `${inResponse}`,
        icon: "error",
        confirmButtonColor: "#3085d6",
    }).then((result) => {

        if (result.isConfirmed || result.isDismissed) {
            window.location.href = "/NewOrders/HtmlFiles/Customer.html";
        }
    });
};


export { StartFunc }