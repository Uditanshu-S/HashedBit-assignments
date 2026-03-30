// JS Practice 1 - Delta
// All questions in one program


// 1) var, let, const example

function checkScope() {

    var a = 10;
    let b = 20;
    const c = 30;

    if (true) {
        var a = 50;      // var changes outside value
        let b = 60;      // block scope
        const c = 70;    // block scope

        console.log("Inside block:", a, b, c);
    }

    console.log("Outside block:", a, b, c);
}

console.log("1) Scope Example");
checkScope();



// 2) Fruits array and return second fruit

var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function secondFruit() {
    return fruits[1];
}

console.log("\n2) Second fruit is:", secondFruit());



// 3) push and pop example

function addAndRemove(arr) {
    arr.push("NewFruit");
    arr.pop();
    return arr;
}

var arr1 = ["A", "B", "C"];
console.log("\n3) After push and pop:", addAndRemove(arr1));



// 4) map - square numbers

var numbers = [1, 2, 3, 4, 5];

function squareArray(arr) {
    return arr.map(function(num) {
        return num * num;
    });
}

console.log("\n4) Square numbers:", squareArray(numbers));



// 5) filter - remove even numbers

function removeEven(arr) {
    return arr.filter(function(num) {
        return num % 2 !== 0;
    });
}

console.log("\n5) Odd numbers:", removeEven([1,2,3,4,5,6]));



// 6) Object and greeting

var person = {
    name: "Aniket",
    age: 22,
    occupation: "Developer"
};

function sayHello(obj) {
    console.log("Hello my name is " + obj.name + 
                ". I am " + obj.age + 
                " years old and I am a " + obj.occupation + ".");
}

console.log("\n6) Greeting:");
sayHello(person);



// 7) Rectangle area

function findArea(rect) {
    return rect.width * rect.height;
}

console.log("\n7) Area of rectangle:", findArea({width: 10, height: 5}));



// 8) Object keys

var car = {
    brand: "BMW",
    model: "X5",
    year: 2022
};

function getObjectKeys(obj) {
    return Object.keys(obj);
}

console.log("\n8) Object keys:", getObjectKeys(car));



// 9) Merge two objects

function merge(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

var obj1 = {a: 1};
var obj2 = {b: 2};

console.log("\n9) Merged object:", merge(obj1, obj2));



// 10) reduce - sum of numbers

var numArray = [10, 20, 30, 40];

function findSum(arr) {
    return arr.reduce(function(total, num) {
        return total + num;
    }, 0);
}

console.log("\n10) Sum is:", findSum(numArray));
