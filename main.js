function add(){
    console.log("This is running");
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    console.log(num1);
    result = +num1 + +num2;
    document.querySelector(".result").innerHTML = result;


};


function multiply(){
    console.log("This is running");
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    console.log(num1);
    result = +num1 * +num2;
    document.querySelector(".result").innerHTML = result;


};

function divide(){
    console.log("This is running");
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    console.log(num1);
    result = +num1 / +num2;
    document.querySelector(".result").innerHTML = result;


};


function substract(){
    console.log("This is running");
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    console.log(num1);
    result = +num1 - +num2;
    document.querySelector(".result").innerHTML = result;


};
