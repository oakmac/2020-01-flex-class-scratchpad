const express = require('express')
const fs = require('fs')

const app = express()

// Middleware that runs on every request:

// app.use(function (req, res, nextFn) {
//   console.log('I run first. Everytime.')
//   nextFn()
// })
//
// app.use(function (req, res, nextFn) {
//   console.log('Shutdown middleware')
//   res.send('server is SHUTDOWN for right now')
//   // nextFn()
// })

app.get('/main.css', function (req, res) {
  res.send('body { background: blue }')
})

app.get('/', function (req, res) {
  let name = 'person'
  if (req.query.name && req.query.name !== '') {
    name = req.query.name
    const msg = name + ' accessed our server today'
    fs.writeFileSync(name + '.txt', msg)
  }
  res.send('Hello ' + name + '!')
})

app.get('/something-special/coffee', function (req, res) {
  console.log("coffee endpoint")
  res.send('<link rel="stylesheet" href="../main.css"><h1>Coffee!!</h1>')
})

app.get('/cole', function (req, res) {
  console.log('someone wants to GET /cole')
  res.send("I'm busy. Try someone else.")
})

app.use(express.static('public'))

app.listen(5050, function () {
  console.log('Server is ALIVE! At port 5050')
})
