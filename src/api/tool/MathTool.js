export function isNumber(str) {
    var test = /^(.)*\D(.)*$/;
    return (!test.test(str)) && (str !== "");
}


export function isMobile (mobile) {
    return /^1[3-9]\d{9}$/.test(mobile)
}
