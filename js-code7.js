// function aThingIMaybeLike(howMuchILikeIt, thing, reason) {
//   return `I ${howMuchILikeIt} ${thing} because ${reason}.`;
// }

// console.log(aThingIMaybeLike("really like", "functional programming", "it's cool"));

function aThingIMaybeLike(howMuchILikeIt) {
  return function(thing) {
    return function(reason) {
      return `I ${howMuchILikeIt} ${thing} because ${reason}.`;
    }
  }
}
console.log(aThingIMaybeLike("really like")("functional programming")("it's cool"));