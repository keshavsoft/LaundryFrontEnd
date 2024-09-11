let StartFunc = ({ inResponse }) => {
    console.log("inResponse:"),inResponse;
    
    Swal.fire({
        title: 'Error alert!',
        text: `${inResponse}`,
        icon: "error"
    });
};


export { StartFunc }