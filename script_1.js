// 1. Even Numbers
function showEven() {
    let result = "";
    for (let i = 2; i <= 100; i += 2) {
        result += i + " ";
    }
    document.getElementById("evenOutput").innerText = result;
}


// 2. Calculator
function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let op = document.getElementById("operator").value;

    let result;

    switch (op) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num2 !== 0 ? num1 / num2 : "Error"; break;
        default: result = "Invalid Operator";
    }

    document.getElementById("calcOutput").innerText = result;
}


// 3. Tax Calculator
function findTax() {
    let salary = Number(document.getElementById("salary").value);
    let tax = 0;

    switch (true) {
        case salary > 0 && salary <= 500000:
            tax = 0; break;

        case salary <= 1000000:
            tax = salary * 0.10; break;

        case salary <= 1500000:
            tax = salary * 0.20; break;

        case salary > 1500000:
            tax = salary * 0.30; break;

        default:
            tax = "Invalid";
    }

    document.getElementById("taxOutput").innerText = tax;
}


// 4. Sum of Products
function sumProducts() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    let arr1 = n1.split('').reverse();
    let arr2 = n2.split('').reverse();

    let max = Math.max(arr1.length, arr2.length);
    let sum = 0;

    for (let i = 0; i < max; i++) {
        let d1 = arr1[i] ? Number(arr1[i]) : 0;
        let d2 = arr2[i] ? Number(arr2[i]) : 0;

        sum += d1 * d2;
    }

    document.getElementById("prodOutput").innerText = sum;
}