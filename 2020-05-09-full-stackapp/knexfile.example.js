module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'mr_listman',
      user:     'YOUR-DBUSER-GOES-HERE',
      password: 'YOUR-PASSWORD-GOES-HERE'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
