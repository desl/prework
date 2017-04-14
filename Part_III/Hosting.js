// var hoists variables. no var can lead to a refernce error as opposed to an undefined variable.

//difference this function takes in two parameters and returns the difference of the two;
function difference(num1, num2){
  return(num1-num2);
}
console.log(difference(2,2)); // 0
console.log(difference(0,2)); // -2

//this function takes in two parameters and returns the product of the two;
function product(num1,num2){
  return(num1*num2);
}
console.log(product(2,2)); // 4
console.log(product(0,2)); // 0


//this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;

function printDay(dayNumber){
  if (dayNumber === 1){return "Sunday";}
  if (dayNumber === 2){return "Monday";}
  if (dayNumber === 3){return "Tuesday";}
  if (dayNumber === 4){return "Wednesday";}
  if (dayNumber === 5){return "Thursday";}
  if (dayNumber === 6){return "Friday";}
  if (dayNumber === 7){return "Saturday";
  } else {
    return;
  }
}
console.log(printDay(4)); // "Wednesday"
console.log(printDay(41)); // undefined

//this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.
function lastElement(arr){
  return arr[arr.length-1];
}
console.log(lastElement([1,2,3,4])); // 4
console.log(lastElement([])); // undefined

//this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"

function numberCompare(num1, num2){
  if (num1 === num2){
    return ("Numbers are equal");
  } if (num1 > num2){
    return "First is greater";
  }else {
    return "Second is greater";
  }
}
console.log(numberCompare(1,1)); // "Numbers are equal"
console.log(numberCompare(2,1)); // "First is greater"
console.log(numberCompare(1,2)); // "Second is greater"

//this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

function singleLetterCount(str, letter){
  var counter = 0;
  for (var i = 0; i < str.length; i++){
    if (str[i].toLowerCase() === letter.toLowerCase()){
      counter ++;
    }
  }
  return counter;
}
console.log(singleLetterCount('amazing','A')); // 2
console.log(singleLetterCount('Rithm School','o')); // 2

//this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.
function multipleLetterCount(str){
  var returnObj = {};
  for (var i = 0 ; i < str.length; i++){
    if (returnObj[str[i]]){
      returnObj[str[i]] ++;
    } else {
      returnObj[str[i]] = 1;
    }
  }
  return returnObj
}

console.log(multipleLetterCount("hello")); // {h:1, e: 1, l: 2, o:1}
console.log(multipleLetterCount("person")); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

//this function should take in at most four parameters (an array, command, location, and value).
//If the command is "remove" and the location is "end", the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
//If the command is "remove" and the location is "beginning", the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
//If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the beginning of the array and return the array.
//If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of the array and return the array.

function arrayManipulation(arr, command, location, value){
  if (command === "remove"){
    if(location === "end"){
      return arr[arr.length-1];
    }if (location === "beginning"){
      return arr[0];
    }
  }
  if (command === "add"){
    if (location === "beginning"){
      arr.unshift(value);
      return arr;
    }
    if (location === "end"){
      arr.push(value);
      return arr;
    }
  }
}

console.log(arrayManipulation([1,2,3], "remove", "end")); // 3
console.log(arrayManipulation([1,2,3], "remove", "beginning")); // 1
console.log(arrayManipulation([1,2,3], "add", "beginning", 20)); // [20,1,2,3]
console.log(arrayManipulation([1,2,3], "add", "end", 30)); // [1,2,3,30]

//A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome('a man a plan a canal Panama'); returns true
function isPalindrome(str){
  var whiteSpaceCount = 0;
  var leftSpace = 0;
  var rightSpace = 0;
  var i = 0;
  
  while( i < (str.length / 2)){
    //console.log(i, str[i].toLowerCase(), str[str.length-1-i].toLowerCase());
    if (str[i+leftSpace] === " "){ leftSpace++;}
    if (str[str.length-1-i-rightSpace] === " "){ rightSpace++;}
    
    if (str[i+leftSpace].toLowerCase() !== str[str.length-1-i-rightSpace].toLowerCase()){
      return false;
    }
    i++;
  }
  return true;
}
console.log(isPalindrome('testing')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('hannah')); // true
console.log(isPalindrome('robert')); // false
console.log(isPalindrome('poor dan is in a droop'));
console.log(isPalindrome('a man a plan a canal Panama'));












