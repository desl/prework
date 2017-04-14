//Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.

function countDown(howMany){
  var counter = howMany;
  var counterID = setInterval (function(){
    if (counter > 1){
      counter--;
      console.log(counter);
    } else {
      console.log("Done");
      clearInterval(counterID);
    }
  }, 1000)
}

//countDown(4);
// 3
// 2
// 1
// "DONE!"

//Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.

function randomGame(){
  var counter = 0;
  var gameID = setInterval(function (){
    var number = Math.random();
    counter ++;
    console.log(counter);
    if (number > .75) {
      clearInterval(gameID);
      return counter;
    }
  }, 1000);
  return counter;
}

console.log(randomGame(), "is over");



//Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not
function isEven(number){
  if (number % 2 === 0){
    return true;
  } else{
    return false;
  }
}
console.log(isEven(2)); // true
console.log(isEven(3)); // false

//Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not
function isOdd(number){
    if (number % 2 === 0){
    return false;
  } else{
    return true;
  }
}

console.log(isOdd(3)); // true
console.log(isOdd(14)); // false

//Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false

function isPrime(number){
  if (number < 2){
    return false;
  }
  for (var i = 2; i< number/2; i++){
    if (number % i === 0){
      console.log("evaluating:",number,"/",i,number % i);
      return false;
    }
  }
  return true;
}

console.log(isPrime(8)); // false
console.log(isPrime(17)); // true

//Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it

function numberFact(number,fn){
  return fn(number);
}
console.log("numberFact",numberFact(59,isEven)); // false
console.log("numberFact",numberFact(59,isOdd)); // true
console.log("numberFact",numberFact(59,isPrime)); // true

//Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.

function find(arr, fn){
  for (var i=0; i<arr.length; i++){
    if (fn(arr[i]) === true){
      return arr[i];
    }
  }
  return undefined;
}
console.log(find([8,11,4,27], function(val){return val >= 10})); // 11
console.log(find([8,11,4,27], function(val){return val === 5})); // undefined

//Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array that matches the condition.


function findIndex (arr, fn){
  for (var i = 0;i<arr.length; i++){
    if (fn(arr[i]) === true){
      return i;
    }
  }
  return undefined;
}
console.log(findIndex([8,11,4,27], function(val){return val >= 10}));
// returns 1 (index of the first value greater than or equal to 10)
console.log(findIndex([8,11,4,27], function(val){return val === 7})); // undefined

//Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.
/*
function specialMultiply(a,b){  
  if (arguments.length === 1){
    return function(b){
      return a*b;
    }
  }
  return a*b;
}
*/
function specialMultiply(a,b){
  console.log("a is:",a,"b is",b);
  if(arguments.length === 1){
    return function(b){
      return a*b;
    }
  }
  return a*b;
}

console.log(specialMultiply(3,4)); // 12
console.log(specialMultiply(3)(4)); // 12
console.log(specialMultiply(2)(7)); // ?
console.log(specialMultiply(3)); // returns a function 

























