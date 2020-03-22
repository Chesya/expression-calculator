function calculate(expr) {
    let arr = expr.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "*") {
            arr[i] = Number(arr[i - 1]) * Number(arr[i + 1]);
            arr.splice(i - 1, 1);
            arr.splice(i, 1);
            i = i - 1;
        }
        if (arr[i] === "/") {
            if (arr[i + 1] === '0') {
                throw new TypeError('TypeError: Division by zero.');
            }
            arr[i] = Number(arr[i - 1]) / Number(arr[i + 1]);
            arr.splice(i - 1, 1);
            arr.splice(i, 1);
            i = i - 1;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "+") {
            arr[i] = Number(arr[i - 1]) + Number(arr[i + 1]);
            arr.splice(i - 1, 1);
            arr.splice(i, 1);
            i -= 1;
        }
        if (arr[i] === "-") {
            arr[i] = Number(arr[i - 1]) - Number(arr[i + 1]);
            arr.splice(i - 1, 1);
            arr.splice(i, 1);
            i -= 1;
        }
    }
    return Number(arr[0]);
}

function expressionCalculator(expr) {
    expr = expr.replace(/\s/g, '').replace(/(\*|\/|\+|\-)/g, ' $& ');
    let left = 0, right = 0;
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === '(') {
            left = left + 1;
        }
        if (expr[i] == ')') {
            right = right + 1;
        }
    }
    if (left !== right) {
        throw new Error("ExpressionError: Brackets must be paired.");
    }
    let brackets;
    while (left > 0) {
        if ((brackets = expr.match(/(\([0-9\+\/\*\-. ]+\))/g)) !== null) {
            for (let i = 0; i < brackets.length; i++) {
                let str = brackets[i].replace('(', '').replace(')', '');
                expr = expr.replace(brackets[i], calculate(str));
            }
        }
        left = left - 1;
    }
    return calculate(expr);
}
module.exports = {
    expressionCalculator
}
