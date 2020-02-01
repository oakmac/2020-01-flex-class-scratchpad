var phoneNumbersObj = {
  '713.878.0505': 'Chris Oakman',
  '281.555.2124': 'Justin Baker',
  '459.225.1552': 'Matt Alagala'
  // ...
}

var phoneNumbersArr = [
  ['713.878.0505', 'Chris Oakman'],
  ['281.555.2124', 'Justin Baker'],
  ['459.252.1552', 'Matt Alagala']
  // ...
]

function doIHaveYourNumber (phoneNumber) {
  if (phoneNumbersObj[phoneNumber]) {
    return true
  } else {
    return false
  }
}


// 1) initial condition
// 2) boolean expression - "should I keep running?"
// 3) a changing condition that effects the boolean
let zzz = 'ZZ Top'
var i = 0
while (i < 5) {
  console.log('hello from a WHILE loop! the index is: ' + i)
  zzz = 'Led Zeppelin'
  // do something with zzz here...
  i = i + 1
}

console.log('here is zzz:', zzz)

for (let i = 0; i < 5; i++) {
  console.log('hello from a FOR loop! the index is: ' + i)
}
console.log('i am outside of the for loop, and here is i:', i)
