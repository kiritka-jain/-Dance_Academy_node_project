require("dotenv").config();
const express = require("express");
const { Pool } = require("pg"); ;
const app = express();
const studentsRoutes = require("./routes/student.routes.js");
const coursesRoutes = require("./routes/course.routes.js");


let PORT = 8082;

app.use("/students",studentsRoutes);
app.use("/courses",coursesRoutes);

const pool = new Pool({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
       database: process.env.PGDATABASE,
       password: process.env.PGPASSWORD,
       port: process.env.PGPORT,
});
pool.connect();

//const connectDb = async () => {
//    try {
//        const pool = new Pool({
//            user: process.env.PGUSER,
//            host: process.env.PGHOST,
//            database: process.env.PGDATABASE,
//            password: process.env.PGPASSWORD,
//            port: process.env.PGPORT,
//        });
//
//        await pool.connect()
//        const res = await pool.query('SELECT * FROM clients')
//        console.log(res)
//        await pool.end()
//    } catch (error) {
//        console.log(error)
//    }
//}

//connectDb()

app.listen(PORT, () => {
  console.log("Server Listening at", PORT);
});