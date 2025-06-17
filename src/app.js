// Sample application entry point
console.log('Hello, World!');

function calculateSum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function processData(data) {
    return data.map(item => item.toUpperCase());
}

module.exports = {
    calculateSum,
    processData,
    multiply
};
