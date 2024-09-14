let StartFunc = () => {
    let jVarLocalBodyKeysJson = {};

    let jVarLocalUserName = document.getElementById('UsernameId').value;
    let jVarLocalPassword = document.getElementById('PasswordId').value;

    jVarLocalBodyKeysJson.UserName = jVarLocalUserName;
    jVarLocalBodyKeysJson.Password = jVarLocalPassword;
    
    return jVarLocalBodyKeysJson;
};


export { StartFunc }