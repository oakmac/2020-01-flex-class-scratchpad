const conn = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : '',
    password : '',
    database : ''
  }
});

const searchTerm = process.argv[2]
if (!searchTerm || searchTerm === '') process.exit(1)

const searchTermWithWildcards = '%' + searchTerm + '%'

// console.log('zzzzzzzz' + searchTerm + 'zzzzzzz')

const myQuery = `SELECT * FROM categories WHERE category_name LIKE ? OR description LIKE ?`

// console.log('zzzzzzzzzz' + myQuery + 'zzzzzzzz')

conn.raw(myQuery, [searchTermWithWildcards, searchTermWithWildcards])
  .then(function (result) {
    console.log("raw success:")
    console.log(result.rows)
  })
  .catch(function (rows) {
    console.log("raw error:")
    console.log(rows)
  })

// conn('categories')
//   .insert({ category_id: '1234', category_name: 'Pizza', description: 'cheese' })
//   .then(function (result) {
//     console.log('SUCCESS:')
//     console.log(result)
//   })
//   .catch(function (err) {
//     console.log('ERROR:')
//     console.log(err)
//   })

//
// conn('categories')
//   .then(function (rows) {
//     console.log('hey - the database got back to you:')
//     console.log(rows)
//   })
//   .catch(function (err) {
//     console.log('hey, something went wrong. and this is what it was:')
//     console.log(err)
//   })
//
// console.log('I happen IMMEDIATELY after the query is sent')
