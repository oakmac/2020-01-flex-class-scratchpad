const express = require('express')
const db = require('./lib/db')

const app = express()

// serve files out of the public directory
app.use(express.static('public'))

const port = 7878

// set the template engine
app.set('view engine', 'hbs')

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

app.param('listUUID', function (req, res, nextFn, listUUID) {
  db.getList(listUUID)
    .then((theList) => {
      req.mr_listman = req.mr_listman || {}
      req.mr_listman.list = theList
      nextFn()
    })
    .catch(() => {
      res.status(404).send('list not found')
    })
})

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
  const theList = req.mr_listman.list
  res.render('list_page', { listName: theList.name, items: dummyItems })
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
