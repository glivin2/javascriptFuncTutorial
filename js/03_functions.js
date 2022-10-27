//Declare a function
function myFunction(){
    console.log('............');
    console.log('Hello World');
    console.log('............');

}


//call the function
//myFunction();




//assign the function as a variable
let a = myFunction;
//a();


//add arguments to your funtion
function sayMyname(name){
    console.log('............');
    console.log('Hello ' + name );
    console.log('............');
}
//sayMyname('Graham');



//Return a calculation takes an argument and returns a calculation
/*
function calculateTax(amount){
    let result = amount * 0.0825;
    return result;

}

let tax = calculateTax(100);
console.log(tax);
*/

//Nested Functions
//setTimeout is a javascript method

setTimeout(function(){
    console.log('I waited 2 seconds');
    }, 2000);


//Recursive Functions - get to on tuesday

/*

let counter = 0;

function timeout() {
    setTimeout(function(){
     console.log('counter = ' + counter--);
     timeout();   
    }, 2000);
}

/*
timeout(); 

*/