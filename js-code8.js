const numArray = [1, 2, 3, 4, 5];
const doubledArray = numArray.map(num => num * 2);
console.log(doubledArray);

const summedArray = numArray.reduce((currentValue, element) => currentValue + element, 0);
console.log(summedArray);

const friends = [{
    name: "Jasmine",
    wantToDo: ["hike", "go out to eat", "swim"]
  },
  {
    name: "Ada",
    wantToDo: ["play games", "hike", "cook meals"]
  },
  {
    name: "Desmond",
    wantToDo: ["sleep", "swim", "play games"]
  },
  {
    name: "Andres",
    wantToDo: ["hike", "swim", "play games"]
  }
];

const toDos = friends.reduce((array, friend) => array.concat(friend.wantToDo), []);
console.log(toDos);
const toDoTally = toDos.reduce((voteTally, toDo) => {
  voteTally[toDo] = (voteTally[toDo] || 0) + 1;
  return voteTally;
}, {});

console.log(toDoTally);

const mostPopular = Object.entries(toDoTally).sort((a, b) => b[1] - a[1]);
console.log(mostPopular);