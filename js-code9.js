const incrementCounter = (counter) => {
  if (isNaN(counter)) // termination condition
  {
    return;
  }
  if (counter >= 3) { // base case - final condition
    return counter;
  } else {
    // console.log(counter);
    return incrementCounter(counter + 1); // recursive condition
  }
}

console.log(incrementCounter(0));

const stringTwo = (strOne) => {
  if (strOne === "") {
    return strOne;
  } else {
    return stringTwo(strOne.substring(1)) + strOne[0];
  }
}
console.log(stringTwo("fern"));