function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function divInt(a, b) {
  return (a - a % b) / b;
}

console.log(divInt(7, 2));
console.log(divInt(-7, 2));
console.log(divide(-7, 2));
console.log(divide(false, 2));
console.log(multiply(2.12, 10));
console.log(multiply(2.12, 10).toFixed(1));
console.log(multiply(true, 10));
console.log(subtract(3, 2));
console.log(subtract(3, 'false'));
console.log(sum(undefined, 2));
console.log(sum(null, 2));
console.log(sum(48, 2));
