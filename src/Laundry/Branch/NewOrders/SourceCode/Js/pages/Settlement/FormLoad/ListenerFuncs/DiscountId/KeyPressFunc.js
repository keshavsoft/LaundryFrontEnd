let StartFunc = () => {
    let jVarLocalEvent=event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalValue = jVarLocalCurrentTarget.value;
    let jVarLocalOrderAmount = jFLocalFromDomOrderAmountId();
    if((jVarLocalValue/jVarLocalOrderAmount)*100<=10){
        jVarLocalCurrentTarget.classList.remove("is-invalid");
    }
    else{
        jVarLocalCurrentTarget.classList.add("is-invalid");
    }

    // let jVarFromCheck = StartFuncCheckBeforeFetch();

    // if (StartFuncCheckBeforeFetch()) {
    //     let jVarLocalBodyData = StartFuncPreparePostData()

    //     let response = await StartFuncFetchFunc({
    //         inSettlementData: jVarLocalBodyData
    //     });

        // StartFuncAfterFetch({
        //     inFromFetch: response, inCustomerName: jVarLocalBodyData.CustomerName
        // });
    };

    let jFLocalFromDomOrderAmountId = () => {
        let jVarLocalHtmlOrderAmountId = 'OrderAmountId';
       let jVarHtmlOrderAmountId = document.getElementById(jVarLocalHtmlOrderAmountId);
       let jVarHtmlOrderAmountIdValue = jVarHtmlOrderAmountId.innerHTML;
       return jVarHtmlOrderAmountIdValue;
    };

export { StartFunc };