function doAThing() {
  return function() {
    return "A thing was done"; //higher order functions: returns another function or takes other functions as an argument
  }
}

console.log(doAThing()()); //call for function inside by using higher order function