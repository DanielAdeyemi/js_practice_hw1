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
// console.log(aThingIMaybeLike("really like")("functional programming")("it's cool"));

const thingsThatBugMe = aThingIMaybeLike("don't like");
console.log(thingsThatBugMe("global variables")("they are a code smell"));
console.log(thingsThatBugMe("functions with side effects")("they break code"));

const reasonILoveCoding = aThingIMaybeLike("love")("coding");
console.log(reasonILoveCoding("it's fun"));
console.log(reasonILoveCoding("I enjoy problem-solving"));