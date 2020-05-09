const express = require('express')

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
  res.render('index', { lists: dummyLists })
})

// the list page shows the items in the list
app.get('/list/:listUUID', function (req, res) {
  res.render('list_page', { listName: 'Dummy List', items: dummyItems })
})

app.listen(port, () => {
  console.log('express is listening on port ' + port)
})
