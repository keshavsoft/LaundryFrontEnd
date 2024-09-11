let StartFunc = ({ inResponse }) => {
    Swal.fire({
        title: 'Error alert!',
        text: `${inResponse}`,
        icon: "error"
    });
};


export { StartFunc }