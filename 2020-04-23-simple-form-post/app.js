// load express libraries from npm / node_modules
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')

// create the express application
const app = express()

const users = JSON.parse(fs.readFileSync('users.json', 'utf8'))

// middleware so we can read form data
app.use(bodyParser.urlencoded({ extended: false }))

// serve the /public directory as static files
app.use(express.static('public'))

app.param('userId', function (req, res, nextFn) {
  // you can look at what was passed in for userId
  nextFn()
})

app.get('/user/:username', function (req, res) {
  const username = req.params.username
  const user = users[username]

  if (!user) {
    res.status(404).send('user "' + username + '" not found :(')
  } else {
    res.send('Hello ' + user.fname + ' ' + user.lname + '. Your favorite fruit is ' + user.favFruit + '!')
  }
})

app.post('/create-account', function (req, res) {
  const newUser = req.body
  const newUsername = req.body.username
  const userAlreadyExists = users[newUsername]

  // do some quick validation on their input
  if (!isUserValid(newUser)) {
    res.status(400).send('Please input some data for your account!')
  } else if (userAlreadyExists) {
    res.status(400).send('Sorry - that username is already taken!')
  } else {
    // save this new user to our users object
    users[newUsername] = newUser

    // write users.json file to disk
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2), 'utf8')

    // send a response message
    res.status(201).send('User created!')
  }
})

const port = 5151

// start the server
app.listen(port, function () {
  console.log('Express.js server is listening on port ' + port)
})

// some lightweight validation; in a real system this would need to be more thorough
function isUserValid (user) {
  return user &&
         user.username && user.username !== '' &&
         user.fname && user.fname !== '' &&
         user.lname && user.lname !== ''
}
