function expressionCalculator(expr) {
    arr = expr.split('');
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '*') {
            arr[i] = Number(arr[i-1])*Number(arr[i+1]);
            arr.splice(i-1, 1);
            arr.splice(i, 1);
            i=i-1;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '/') {
            if (Number(arr[i+1]) == 0) {
                console.log("TypeError: Division by zero.");
            } else {
                arr[i] = Number(arr[i-1])/Number(arr[i+1]);
                arr.splice(i-1, 1);
                arr.splice(i, 1);
                i=i-1;
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '+') {
            arr[i] = Number(arr[i-1])+Number(arr[i+1]);
            arr.splice(i-1, 1);
            arr.splice(i, 1);
            i=i-1;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '-') {
            arr[i] = Number(arr[i-1])-Number(arr[i+1]);
            arr.splice(i-1, 1);
            arr.splice(i, 1);
            i=i-1;
        }
    }
    return Number(arr);
}

module.exports = {
    expressionCalculator
}
