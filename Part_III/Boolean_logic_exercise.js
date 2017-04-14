Part I
Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console.

2 == "2"; // true
2 === 2; // true
10 % 3; // 1
10 % 3 === 1; // true
true && false; // false
false || true; // true
true || false; // true
Part II
Answer the following questions about this code block:

var isLearning = true;
if(isLearning){
    console.log("Keep it up!");
} else {
    console.log("Pretty sure you are learning....");
}
What should the above code console.log?
	Keep it up!

Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?
	that isLearning exists and is defined is truthy

var firstVariable;
var secondVariable = "";
var thirdVariable = 1;
var secretMessage = "Shh!";

if(firstVariable){
    console.log("first");
} else if(firstVariable || secondVariable){
    console.log("second");
} else if(firstVariable || thirdVariable){
    console.log("third");
} else {
    console.log("fourth");
}
What should the above code console.log? Why? 
	Third. firstVariable is undefined. secondVariable is "" which is also falsey. thirdVariable is "truthy" in
	that it is equal to 1.

What is the value of firstVariable when it is initialized?
	undefined

Is the value of firstVariable a "truthy" value? Why?
	no, undefined is not truthy.
	These values are always falsey
	false.
	0 (zero)
	"" (empty string)
	null.
	undefined.
	NaN (a special Number value meaning Not-a-Number!)

Is the value of secondVariable a "truthy" value? Why?
	"" is not a truthy value

Is the value of thirdVariable a "truthy" value? Why?
	It is not on the list of falsey values.

Part III
Research Math.random here and write an if statement that console.log's "Over 0.5" if Math.random returns a number greater than 0.5. Otherwise console.log "Under 0.5".
	if (Math.random() > 0.5){
    	console.log("Over 0.5");
	}	

What is a falsey value? List all the falsey values in JavaScript.
	See above.