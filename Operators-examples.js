//Operator precedence
console.log(3 + 4 * 5); // 3 + 20
// expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// expected output: 36

let a;
let b;

console.log(a = b = 5);
// expected output: 5

// Precedence And Associativity

console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order

