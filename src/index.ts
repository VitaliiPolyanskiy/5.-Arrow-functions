function mathOperation(x: number, y: number, operation: (a: number, b: number) => number): number {

    let result = operation(x, y);
    return result;
}

let operationFunc: (x: number, y: number) => number;
operationFunc = (a: number, b: number) => a + b;
console.log(mathOperation(3, 5, operationFunc));

let result = mathOperation(3, 5, (a: number, b: number) => a - b);
console.log(result);

result = mathOperation(3, 5, (a: number, b: number) => { return a * b; });
console.log(result);

result = mathOperation(3, 5, (a, b) => a / b);
console.log(result); 