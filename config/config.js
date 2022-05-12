require('dotenv').config()
module.exports = {
  development: {
    database: 'center',
    dialect: 'postgres'
  },
  test: {
    database: 'center',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}

// {
//   "development": {
//     "database": "center",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "center",
//     "host": "127.0.0.1",
//     "dialect": "postgress"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "center",
//     "host": "127.0.0.1",
//     "dialect": "postgress"
//   }
// }
