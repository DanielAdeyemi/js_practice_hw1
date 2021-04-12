const multiplier = (numberToMultiplyBy) => {
  return (numberToMultiply) => { // closure - inner function that have access to variables from an outer function
    return numberToMultiplyBy * numberToMultiply;
  }
}
const doubler = multiplier(2);
const tripler = multiplier(3);
const quadrupler = multiplier(4);

console.log(doubler(4));
console.log(tripler(4));
console.log(quadrupler(4));