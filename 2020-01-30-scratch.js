// function add1 (anotherNum) {
//   return (anotherNum + 1)
// }
//
// function add7 (someNum) {
//   return someNum + (6 + add1(0))
// }
//
// console.log( 5 * add7(2) )

var weirdObj = {
  bestFruit: 'Banana'
}

// console.log(weirdObj.bestFruit)
// console.log(weirdObj['bestFruit'])
// console.log(weirdObj["bestFruit"])


var me = {
  name : {
    first : "Chris",
    last : "Oakman",
    sayHello: ((function () {
      console.log('hi! I am chris')
    }))
  },
  location : {
    name : "Houston, TX",
    lat : 29.75961,
    lng : -95.36270
  }
};

// console.assert(typeof me.name.sayHello === 'function')
// me.name.sayHello()


var myArrayOfFunThings = [
  "boats",
  function () { return 'programming!' },
  "football",
  "water",
  "beer",
  4
]
console.log('number of fun things:', myArrayOfFunThings.length)
console.log(myArrayOfFunThings[1]())
var activityIdoeveryDay = myArrayOfFunThings[1]
console.assert(typeof activityIdoeveryDay === 'function', 'hey man - activityIdoeveryDay should be a function. you messed up')
console.log(activityIdoeveryDay())





function crazyFn () {
  var obj = {
    numbers: [],
    strings: []
  }
  for (var i = 0; i < arguments.length; i++) {
    var theArg = arguments[i]
    if (typeof theArg === 'number') obj.numbers.push(theArg)
    else if (typeof theArg === 'string') obj.strings.push(theArg)
    else console.log("hey man - please only pass strings or numbers to crazyFn")
  }
  return obj
}

console.log(crazyFn(5, 2, 4, "a", "b", "c", 6))
// {node
//   numbers: [5, 2, 4, 6],
//   strings: ["a", "b", "c"]
// }
