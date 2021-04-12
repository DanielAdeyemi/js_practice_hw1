const incrementCounter = (counter) => {
  if (counter >= 3) { // base case - final condition
    return counter;
  } else {
    console.log(counter);
    return incrementCounter(counter + 1); // recursive condition
  }
}

console.log(incrementCounter(1));