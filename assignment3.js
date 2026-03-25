// Q1
function q1() {
    let input = document.getElementById("q1input").value;

    let states = input.split(",");

    let res = states.filter(s => !'aeiou'.includes(s.trim()[0].toLowerCase()));

    document.getElementById("out1").innerText = res;
}

// Q2
function q2() {
    let input = document.getElementById("q2input").value;
    let res = input.split(" ").reverse().join(" ");
    document.getElementById("out2").innerText = res;
}

// Q3
function q3() {
    let input = document.getElementById("q3input").value.toUpperCase();

    let arr = input.split("");

    // Replace last 2 letters with ONESIA
    arr.splice(arr.length - 2, 2, "O","N","E","S","I","A");

    document.getElementById("out3").innerText = arr.join("");
}

// Q4
function q4() {
    let text = document.getElementById("q4input").value.toLowerCase();
    let v=0,c=0;

    for(let ch of text){
        if("aeiou".includes(ch)) v++;
        else if(ch>='a' && ch<='z') c++;
    }

    document.getElementById("out4").innerText = "Vowels: "+v+" Consonants: "+c;
}

// Q5
function q5() {
    let str = document.getElementById("str").value;
    let wrong = document.getElementById("wrong").value;
    let correct = document.getElementById("correct").value;

    let res = str.replace(wrong, correct);
    document.getElementById("out5").innerText = res;
}

// Q6
function q6() {
    let input = document.getElementById("q6input").value;

    let arr = input.split(",").map(Number);

    let res = arr.filter(n => n > 5);

    document.getElementById("out6").innerText = res;
}

// Q7
let studentsList = [];

function q7() {
    let name = document.getElementById("name").value;
    let scores = document.getElementById("scores").value.split(",").map(Number);

    let total = scores.reduce((a, b) => a + b, 0);
    let avg = total / scores.length;

    studentsList.push({ name, average: avg });

    document.getElementById("out7").innerText = JSON.stringify(studentsList);
}

// Q8
function q8() {
    let n = document.getElementById("num").value;

    while(n > 9){
        n = n.toString().split('').reduce((a,b)=>a+Number(b),0);
    }

    document.getElementById("out8").innerText = n;
}

// Q9
function q9() {
    let str = document.getElementById("q9input").value;
    let res = str.trim().split(/\s+/).length;
    document.getElementById("out9").innerText = res;
}

// Q10
function q10() {
    let str = document.getElementById("q10input").value;
    let res = str.split("").reverse().join("");
    document.getElementById("out10").innerText = res;
}

// Q11
let studentsData = {};

function addStudent() {
    let name = document.getElementById("studentName").value;
    let marks = document.getElementById("marks").value.split(",").map(Number);

    studentsData[name] = { marks };
    
    alert("Student Added");
}

function calculateAvg() {
    let result = {};

    for (let key in studentsData) {
        let arr = studentsData[key].marks;

        let total = arr.reduce((a, b) => a + b, 0);
        let avg = total / arr.length;

        result[key] = { average: avg };
    }

    document.getElementById("out11").innerText = JSON.stringify(result);
}