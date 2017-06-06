// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(num1, num2){
  if (num1 > num2) {
    return num1;
    console.log(num1);
  }
  else if (num2 > num1) {
    return num2;
    console.log(num2);
  }
  else {
    alert("You did something wrong");
  }
}
max(4, 8)

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(n1, n2, n3){
  if (n1 > n2 && n1 > n3) {
    return n1;
  }
  else if (n2 > n1 && n2 > n3) {
    return n2;
  }
  else {
    return n3;
  }
}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
    if (char === "a") {
      return true;
    }
    else if (char === "e") {
      return true;
    }
    else if (char === "i") {
      return true;
    }
    else if (char === "o") {
      return true;
    }
    else if (char === "u") {
      return true;
    }
    else {
      return false;
    }
}


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
function sum(num1, num2) {
  return sum1 + sum2;
}



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function avg(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength(parm1) {
    return parm1.length;
}



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
function greaterThan(par1, par2) {
  if (par2 > par1) {
    return true;
  }
  else {
    return false;
  }
}


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:

function greet(p1) {
  return "Hello, " + p1 + "!";
}


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madlib(word1, word2, word3, word4) {
  return "Hi " + word1 + ", the pickels are " + word3 + ". Why are they like that " + word2 + "? " + word4 + " has come home.";
}
