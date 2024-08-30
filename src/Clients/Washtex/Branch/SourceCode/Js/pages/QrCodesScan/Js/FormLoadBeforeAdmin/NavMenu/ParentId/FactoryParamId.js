let StartFunc = () => {
    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);
    const k1 = new URL("../../DCAll/ShowAll/ShowAll.html", myUrlWithParams.href);
    window.location.href = k1.href;
};

export { StartFunc };

