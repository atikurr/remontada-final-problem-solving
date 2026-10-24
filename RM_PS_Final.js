var solveMeFirst = function(a, b) {
    return a + b;
};

// 2nd
var multiply = function(a, b) {
    return a * b;
};

// 3rd

var evenOrOdd = function(number) {
    if (number % 2===0){
        return "even";
    }
    else{
        return "Odd";
    }



};
console.log(solveMeFirst(2, 3));
console.log(multiply(4, 5));
console.log(evenOrOdd(7));
console.log(evenOrOdd(10));
console.log(evenOrOdd(4));  