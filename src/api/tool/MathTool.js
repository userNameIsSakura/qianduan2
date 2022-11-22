export function isNumber(str) {
    var test = /^(.)*\D(.)*$/;
    return (!test.test(str)) && (str !== "");
}
