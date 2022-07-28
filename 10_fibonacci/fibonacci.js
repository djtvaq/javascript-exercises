const fibonacci = function (a) {


    if (a < 0) {
        return 'OOPS'
    }

    //first two of the fibonacci are fixed according to formula
    let fibonacciStarter = [1, 1]

    //formula = fn = fn-1 + fn-2. this formulat iterates this formulat for ever number starting at 2 ( which is where this formula starts, at f3 in the sequence)
    for (let i = 2; i < a; i++) {
        let fibonacciFormula = fibonacciStarter[i - 1] + fibonacciStarter[i - 2];
        fibonacciStarter.push(fibonacciFormula)
    }

    //returm the last number of the sequence
    return fibonacciStarter[fibonacciStarter.length - 1]




};

// Do not edit below this line
module.exports = fibonacci;
