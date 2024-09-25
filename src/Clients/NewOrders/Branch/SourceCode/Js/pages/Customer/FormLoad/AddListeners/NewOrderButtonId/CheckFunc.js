let StartFunc = () => {
    let jvarLocalCustomerNameInputId = document.getElementById("CustomerNameInputId");
if (jvarLocalCustomerNameInputId.value ==="") {
    jvarLocalCustomerNameInputId.classList.add("is-invalid");
    return false;
    
}

    return true;
};

export { StartFunc }