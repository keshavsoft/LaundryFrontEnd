const StartFunc = (value, row, index) => {
    let currentTime = new Date().getTime();
    let time = new Date(value).getTime();

    let diff = currentTime - time;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const remainingSeconds = seconds % 60;
    const remainingMinutes = minutes % 60;
    let string = ""

    if (hours > 0) {
        string += hours + " hours ";
    }
    if (remainingMinutes > 0) {
        string += remainingMinutes + " minutes ";
    }
    if (remainingSeconds > 0) {
        string += remainingSeconds + " seconds ago";
    }
    if (remainingSeconds === 0 && remainingMinutes === 0 && hours === 0) {
        string = "Just now";
    }
    return string;
};

export { StartFunc };