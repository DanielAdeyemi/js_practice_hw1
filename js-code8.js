const numArray = [1, 2, 3, 4, 5];
const doubledArray = numArray.map(num => num * 2);
console.log(doubledArray);

const summedArray = numArray.reduce((currentValue, element) => currentValue + element, 0);
console.log(summedArray);