// If num is a JavaScript number and divide num by 2 has no
// remainder, then it is an even number.

function isEven (num) {
  // if ("num is a number" && "num divided by 2 has no remainder") {
  //   return true
  // } else {
  //   return false
  // }

  // if (typeof num === 'number' && num % 2 === 0) {
  //   return true
  // } else {
  //   return false
  // }

  return typeof num === 'number' && num % 2 === 0
}



const x = true &&
          'aubrey' === 'aubrey' &&
          'justin' === 'justin' &&
          'Chris' === 'Chris' &&
          {bestFruit: 'Banana'} &&
          'zzzzzzzzzz' === 'zzzzzzzzzz'

// console.log(x)


const fruits = ['Apple', 'Banana', 'Cherry', 'Strawberry']

for (let i = 0; i < fruits.length; i++) {
  const theFruit = fruits[i]
  // whatever I want...
}

const fruitsWithZZZ = fruits.map(function (itm) {
  return itm + 'zzzzzzzzzzzz'
})

function addQsAtTheEnd (aString) {
  return aString + 'qqqqqqqqqq'
}

const fruitsWithQQQQQ = fruits.map(addQsAtTheEnd)

console.log(fruitsWithZZZ)
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(fruitsWithQQQQQ)
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

const returnValueOfForeach = fruits.forEach(function (aFruit) {
  console.log(aFruit + ' Matt')
})
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(returnValueOfForeach)










// const y = obj &&
//           obj.foo &&
//           obj.foo.bar &&
//           obj.foo.bar.biz
