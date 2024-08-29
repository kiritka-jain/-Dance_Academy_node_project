module.exports = {
     USER: process.env.PGUSER,
     HOST: process.env.PGHOST,
     DB: process.env.PGDATABASE,
     PASSWORD: process.env.PGPASSWORD,
     dialect: process.env.PGDIALECT,
     pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
  }
}