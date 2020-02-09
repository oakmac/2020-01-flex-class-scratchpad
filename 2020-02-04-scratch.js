// const a = "apple"
//
// console.log(a) // "apple"
// func1()        // "apricot"
// console.log(a) // "apricot" (the value of "a" was changed inside func1)


// var b = "banana"
// var func2 = function () {
//   // define variable "b" inside this function
//   // completely separate from the "b" defined outside the function
//   var b = "blueberry"
//   console.log(b)
// }
// console.log(b) // "banana"
// func2()        // "blueberry"
// console.log(b) // "banana"





function makeCounter () {
  // variable "count" is defined inside our function
  var count = 0

  // we return an object with three properties
  // each property is a function that has access to the "count" variable
  return {
    up    : function() {
      function coconut () {
        console.log('i am coconut!!!!', count);
      }
      coconut()
      count++;
    },
    down  : function() { count--; },
    value : function() { return count; }
  }
}

let counter1 = makeCounter()
console.log('The counter1.value() is:', counter1.value())
for (let i = 0; i < 27; i++) {
  counter1.up()
}
console.log('The counter1.value() is:', counter1.value())


let counter2 = makeCounter()
console.log('The counter2.value() is:', counter2.value())
for (let i = 0; i < 980; i++) {
  counter2.up()
}
console.log('The counter2.value() is:', counter2.value())



// time

counter1 = null








{
  "a": 99
  "z": 1
}
