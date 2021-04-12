function welcome(salutation) { //outer function
  return function(yourName) { //inner function
    return `${salutation}! Nice to meet you, ${yourName}!`;
  }
}

const heyThere = welcome("Hey there");
console.log(heyThere("Daniel"));