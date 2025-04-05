function makeDateTime(seconds) {
    const days = parseInt(seconds / (24 * 3600));
    seconds %= 24 * 3600;

    let hours = parseInt(seconds / 3600);
    seconds %= 3600;

    const minutes = parseInt(seconds / 60);
    seconds %= 60;
    return `${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds`;

}

console.log(makeDateTime(100000));