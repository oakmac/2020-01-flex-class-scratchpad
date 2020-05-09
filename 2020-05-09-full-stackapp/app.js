const express = require('express')
const db = require('./lib/db')

const app = express()

// serve files out of the public directory
app.use(express.static('public'))

const port = 7878

// set the template engine
app.set('view engine', 'hbs')

const dummyLists = [
  {
    uuid: 'asdfasdfasdfsdaf',
    name: 'Grocery List'
  },
  {
    uuid: 'werqwerqwerewreqw',
    name: 'Todo List'
  }
]

const dummyItems = [
  {
    uuid: 'asdfasdfasdfsdaf',
    description: 'Wash the dog',
    display_order: 1
  },
  {
    uuid: 'yuityuityuiutyiuy',
    description: 'Wash the car',
    display_order: 2
  }
]

// app.param('id', function (req, res, next, id) {
//   console.log('CALLED ONLY ONCE')
//   next()
// })

// the homepage shows your lists
app.get('/', function (req, res) {
  db.getLists()
    .then((lists) => {
      res.render('index', { lists: lists })
    })
    .catch(() => {
      // TODO: show an error page here
    })
})

// the list page shows the items in the list
app.get('/list/:listUUID', function (req, res) {
  res.render('list_page', { listName: 'Dummy List', items: dummyItems })
})

const startExpressApp = () => {
  app.listen(port, () => {
    console.log('express is listening on port ' + port)
  })
}

const bootupSequenceFailed = (err) => {
  console.error('Unable to connect to the database:', err)
  console.error('Goodbye!')
  process.exit(1)
}

// global kickoff point
db.connect()
  .then(startExpressApp)
  .catch(bootupSequenceFailed)
