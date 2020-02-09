const aBunchOfNumbers = [4, 89, 2, 89, 20, 17]

// const fizzleBanana = 'forEach'
// aBunchOfNumbers['forEach']()
// aBunchOfNumbers[fizzleBanana]()

function sayHello (itm, idx, theFullArray) {
  // console.log('Hello from forEach! ' + itm)
  console.log(itm)
  console.log('idx:', idx)
  console.log(theFullArray)
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
}

// aBunchOfNumbers.forEach(function () {
//   console.log('Hello from forEach!')
// })

// const resultOfForEach = aBunchOfNumbers.forEach(sayHello)

// console.log('555555555555555555555555555')
// console.log(resultOfForEach)

// ourForEach(aBunchOfNumbers, sayHello)

function ourForEach (anArray, someFn) {
  for (let i = 0; i < anArray.length; i++) {
    someFn(anArray[i], i, anArray)
  }
}

function ourMap (anArray, someFn) {
  let newArray = []
  for (let i = 0; i < anArray.length; i++) {
    const itm = anArray[i]
    const resultItm = someFn(itm)
    newArray.push(resultItm)
  }
  return newArray
}



// var naderUtilityMethods = {
//   forEach: ourForEach
// }
//
// naderUtilityMethods.forEach(aBunchOfNumbers, function (itm) {
//   console.log('hello from nader! ' + itm)
// })

function getLastName (user) {
  return user.lname
}

function multipleBy3 (num) {
  return num * 3
}


console.assert(multipleBy3(4) === 12)
console.assert(multipleBy3(0) === 0)
console.assert(multipleBy3(-100) === -300)

const numbersMultipliedBy3 = aBunchOfNumbers.map(multipleBy3)
// console.log('Original Array:', aBunchOfNumbers)
// console.log('x3:', numbersMultipliedBy3)
// console.log('x3 (again):', numbersMultipliedBy3.map(multipleBy3))
// console.log('chaining:', aBunchOfNumbers.map(multipleBy3)
//                                         .map(multipleBy3)
//                                         .map(multipleBy3)
//                                         .map(multipleBy3)
//                                         .map(multipleBy3)
//                                         .map(multipleBy3))



const users = [
  {
    fname: 'Shawn',
    lname: 'Benny',
    username: '     s_benny283232',
    id: 28572824,
    isLoggedIn: true
  },
  {
    fname: 'Cole',
    lname: 'Tucker',
    username: 'tuckersauce999     ',
    id: 92847262,
    isLoggedIn: true
  },
  {
    fname: 'Henry',
    lname: 'Lee',
    username: '     i_love_kevin  ',
    id: 928232,
    isLoggedIn: true
  }
]

function removeNumbersFromUsername (user) {
  return user.username.replace(/[0-9]/g, '')
}

// const updatedUsers = users.map(removeNumbersFromUsername)
//                           .map(convertUnderscoresToHyphens)
//                           .map(removeExtraSpaces)
// console.log(updatedUsers)


function isEven (num) {
  return typeof num === 'number' && num % 2 === 0
}

function isUserLoggedIn (user) {
  return user.isLoggedIn
}

function getUsername (user) {
  return user.username
}

function removeExtraSpaces (username) {
  console.assert(typeof username === 'string', 'uh-oh, you passed not a string to removeExtraSpaces')
  return username.trim()
}

const evenNumbers = aBunchOfNumbers.filter(isEven)

const loggedInUsers = users.filter(isUserLoggedIn)
// console.log('all users:', users.map(getUsername)
//                                .map(removeExtraSpaces))
// console.log('logged in users:', loggedInUsers.map(getUsername)
//                                              .map(removeExtraSpaces))


if (users.every(isUserLoggedIn)) {
  console.log('everyone is logged in!')
} else {
  console.log('someone is logged out')
}

users.reduce('', function (acc, itm) {

})
