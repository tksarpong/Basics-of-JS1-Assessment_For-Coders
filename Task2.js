// 1. Write a program that determines the type of triangle based on the lengths of its sides (`side1`, `side2`, and `side3`). The types of triangles are equilateral, isosceles, and scalene.

var side1 = 5;
var side2 = 5;
var side3 = 8;
var triangleType;
//COMPLETE THE CODE HERE
if (side1 === side2 && side2 === side3) {
  triangleType = "Equilateral";
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  triangleType = "Isosceles";
} else {
  triangleType = "Scalene";
}

console.log("The triangle is " + triangleType);

// 2. Write a JavaScript program that counts the number of occurrences of a specific element in an array using a for...of loop.

function countOccurrences(arr, target) {
  //COMPLETE THE CODE HERE
  let count = 0;
  for (const element of arr) {
      if (element === target) {
          count++;
      }
  }
  return count;
}
  
var numbers = [1, 2, 3, 2, 4, 2, 5];
console.log(countOccurrences(numbers, 2)); 


// 3. Write a function that takes an array of product prices and returns the total price. 
//You can assume that the array contains only numbers.

function calculateTotalPrice(prices) {
  //COMPLETE THE CODE HERE
  let total = 0;
  for (const price of prices) {
      total += price;
  }
  return total;  
}

// Example usage:
var productPrices = [10, 20, 30, 40];
console.log(calculateTotalPrice(productPrices)); 


// 4. Write a function that takes an array of product prices and a discount percentage. 
//Apply the discount to each product price and return the updated prices as an array.

function applyDiscount(prices, discount) {
  //COMPLETE THE CODE HERE
  let discountedPrices = [];
  for (let i = 0; i < prices.length; i++) {
    let originalPrice = prices[i];
    let discountedPrice = originalPrice - (originalPrice * (discount / 100));
    discountedPrices.push(discountedPrice);
  }
  return discountedPrices; 
}

// Example usage:
var productPrices = [10, 20, 30, 40];
var discountPercentage = 20;
console.log(applyDiscount(productPrices, discountPercentage)); 

// 5. Write a function that takes an array of product quantities and 
//returns an array of indices for products that are out of stock (quantity is 0).

function getOutOfStockProducts(quantities) {
  //COMPLETE THE CODE HERE
  let outOfStockIndices = [];
  for (let i = 0; i < quantities.length; i++) {
    if (quantities[i] === 0) {
      outOfStockIndices.push(i);
    }
  }
  return outOfStockIndices;
}

// Example usage:
var productQuantities = [2, 0, 4, 0, 3];
console.log(getOutOfStockProducts(productQuantities)); 

// 6. Print the multiplication table of 7
// It should be in the format: 
// 7 * 1 = 7
// WRITE THE CODE HERE

var range = 10;
function multiplicationTable(range) {
  for (var i = 1; i <= range; i++) {
    var result = 7 * i;
    console.log("7 * " + i + " = " +result);
  }
}

multiplicationTable(range);


// 7. Create a function to calculate factorial of a number.
// Assume that the input is an integer
// Example: Factorial of 5 = 120

function calculateFactorial(n) {
// COMPLETE THE CODE HERE
  var factorial = 1;
  if (n < 0) {
    return "Input must be a positive integer";
  } else if (n === 0) {
    return 1;
  } else {
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;    
  }
}

// Example Usage
console.log(calculateFactorial(0));     // Should print 1
console.log(calculateFactorial(5));     // Should print 120
console.log(calculateFactorial(10));    // Should print 3628800
console.log(calculateFactorial(-1));    // Should print "Input must be a positive integer"


// 8. Create a function to generate fibonacci series. 
// Fibonacci Series is a sequence of numbers in which each number is the sum of the two preceding ones. It starts with 0 and 1.
// The number of terms of the series should be passed as argument to the function.
// Example: Fibonacci series of 5 terms => 0 1 1 2 3 
// Assume that the inputs are positive integers

function generateFibonacciSeries(numTerms) {
// COMPLETE THE CODE HERE
  if (numTerms <= 0) {
    return "Input must be a positive integer";
  }

  if (numTerms === 1) {
    return [0];
  }

  let fibonacciSeries = [0, 1];

  for (let i = 2; i < numTerms; i++) {
    var nextTerm = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    fibonacciSeries.push(nextTerm);
  }

  return fibonacciSeries;
}

// Example Usage
console.log(generateFibonacciSeries(0));   // Should print "Input must be a positive integer"
console.log(generateFibonacciSeries(1));   // Should print [0]
console.log(generateFibonacciSeries(5));   // Should print [0, 1, 1, 2, 3]
console.log(generateFibonacciSeries(10));  // Should print [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// 9. Create a function to print a star-pattern triangle 
// The function should take number of rows as an argument
// Assume that the argument passed is a positive integer
// The pattern should appear as follows for input = 5
// *
// * *
// * * *
// * * * *
// * * * * *

function printTriangle(rows) {
  // COMPLETE THE CODE HERE
  for (let i = 1; i <= rows; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
      stars += '*';
      if (j < i) {
        stars += ' ';
      }
    }
    console.log(stars);
  }
}

// Example Usage
printTriangle(5);
printTriangle(7);

// 10. Create a function to reverse a string. 
// Pass a string as an argument.
// Assume that the argument is always a string.

function reverseString(inputString) {
// COMPLETE THE CODE HERE
let reversed = '';
for (let i = inputString.length - 1; i >= 0; i--) {
  reversed += inputString[i];
}
return reversed;
}

// Example Usage
console.log(reverseString("Hello, World!"));  // Should print "!dlroW ,olleH"
console.log(reverseString("12345"));          // Should print "54321"
console.log(reverseString(""));               // Should print ""
       
