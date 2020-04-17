function sayHello () {
  console.log('hello from my util file!')
}

function internalSum (num1, num2) {
  return num1 + num2
}

module.exports = {
  sayHello: sayHello,
  add: internalSum
}
