const express = require('express')

const app = express()

const defaultPort = 8080
const port = process.argv[2] ? parseInt(process.argv[2], 10) : defaultPort

app.param('number1', function (req, res, nextFn, number1) {
  req.number1 = number1
  nextFn()
})

app.param('number2', function (req, res, nextFn, number2) {
  req.number2 = number2
  nextFn()
})

app.use(express.static('public'))
app.use(slowItDown)
app.get('/api1/best-fruit', fruitEndpoint)
app.get('/api1/sum/:number1/:number2', sumEndpoint)
app.listen(port)

console.log('HTTP server running on port ' + port)

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

function randomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function slowItDown (req, res, nextFn) {
  if (true) {
    setTimeout(nextFn, randomInt(750, 1500))
  } else {
    nextFn()
  }
}

function sumEndpoint (req, res) {
  const num1 = parseInt(req.number1, 10)
  const num2 = parseInt(req.number2, 10)
  const sum = num1 + num2

  res.status(200).send(JSON.stringify({ sum: sum }))
}

function fruitEndpoint (req, res) {
  res.status(200).send(JSON.stringify({bestFruit: 'banana'}))
}
