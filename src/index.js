module.exports = function reverse(n) {
    let newNumber = Math.abs(n) + '';
    let revNumber = newNumber.split("").reverse().join("");
    return +revNumber;
};
