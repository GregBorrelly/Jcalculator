function getNumString (){
    var NumString  = document.getElementById("num1").value;
    console.log(NumString);
    var calcArray = NumString.split(" ");
    var num1 = calcArray[0];
    var num2 = calcArray[2];
    console.log(num1,num2, calcArray);
    
    if(calcArray[1] === "+"){

      add(num1, num2);


    };

     if(calcArray[1] === "-"){
        substract(num1,num2);

    };

     if(calcArray[1] === "*"){
        multiply(num1,num2);

    };


     if(calcArray[1] === "/"){
        divide(num1,num2);

    };

  




};

function clearEverything(){
    console.log("This is running");
    document.querySelector("#num1").value= null;
};

onload = 
function(){

    document.getElementById("numbersP").addEventListener("click", function(event){

        console.log( event.keyCode);

             
     document.querySelector("#num1").value += event['path'][0]['attributes'][1]['nodeValue'];

    });
      


};




function add(number1, number2){
   
    var num1 = number1;
    var num2 = number2;
  
    result = +num1 + +num2;
    document.querySelector("#num1").value= result;


};






function multiply(number1, number2){
    var num1 = number1;
    var num2 = number2;
  
    result = +num1 * +num2;
    document.querySelector("#num1").value= result;


};

function divide(number1, number2){
      var num1 = number1;
    var num2 = number2;
  
    result = +num1 / +num2;
       document.querySelector("#num1").value= result;


};


function substract(number1, number2){
       var num1 = number1;
    var num2 = number2;
  
    result = +num1 - +num2;
      document.querySelector("#num1").value= result;


};

