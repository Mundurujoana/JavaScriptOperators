//JavaScript Numbers
console.log(124);
console.log(12.4);
console.log(Number.MAX_SAFE_INTEGER.toLocaleString);
console.log(BigInt);
console.log(0);
console.log(-0);
console.log(Infinity);
console.log(-Infinity);
console.log(typeof NaN);


// Assignment Operators
let x = 5;
let y = 3;

// addition
console.log('x + y = ', x + y);  // 8

// subtraction
console.log('x - y = ', x - y);  // 2

// multiplication
console.log('x * y = ', x * y);  // 15

// division
console.log('x / y = ', x / y);  // 1.6666666666666667

// remainder
console.log('x % y = ', x % y);   // 2

// increment
console.log('++x = ', ++x); // x is now 6
console.log('x++ = ', x++); // prints 6 and then increased to 7
console.log('x = ', x);     // 7

// decrement
console.log('--x = ', --x); // x is now 6
console.log('x-- = ', x--); // prints 6 and then decreased to 5
console.log('x = ', x);     // 5

//exponentiation
console.log('x ** y =', x ** y);


// Arithmetic Operators
const w = 5;


// Comparison Operators
// equal operator
console.log(5 == 5); // true
console.log(12 == '12'); // true

// not equal operator
console.log(80 != 24); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(33 === 33); // true
console.log(12 === '12'); // false

// strict not equal operator
console.log(20 !== '25'); // true


// Logical Operators
// logical AND
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true); // false

// logical OR
console.log(true || false); // true
console.log(true || true);// true
console.log(false || false);// false
console.log(false || true);// true

// logical NOT
console.log(!true); // false


// Bitwise Operators


// String Operators
// concatenation operator
console.log('hello' + 'world');

let a = 'JavaScript';

a += ' tutorial';  // a = a + ' tutorial';
console.log(a);


// Other Operators


num1 = 5.7;
num2 =5;
var sumOfnum = num1 + num2
console.log("addition:"+ " "+sumOfnum);

var letDivide = num1 / num2
console.log("Division:"+ " "+ letDivide);

var letsMultiplty= num1*num2
console.log("Product"+ " "+letsMultiplty);

var numRemainder = num1 % num2
console.log("Remainder"+ " "+numRemainder);
var subtractNum = num1 - num2
console.log("Subtraction:"+" "+subtractNum);

var num3 = 2;
var incrememt = num3++
console.log("incrememt postfix:"+" "+ incrememt);

var num4 = 2;
var incrememt1 =++num4
console.log("incrememt prefix:"+" "+ incrememt1);
