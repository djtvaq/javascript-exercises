const sumAll = function (a, b) {

    let largestNumber = Math.max(a, b)
    let smallestNumber = Math.min(a, b)

    let range = [];
    for (let i = smallestNumber; i <= largestNumber; i++) {
        range.push(i)
    }

    let initialValue = 0
    let totalSum = range.reduce((previousValue, nextValue) =>
        previousValue + nextValue, initialValue
    )

    if (a < 0 || b < 0) {
        return 'ERROR'
    } else if (typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR'
    } else {
        return totalSum
    }
  
};

// Do not edit below this line
module.exports = sumAll;
