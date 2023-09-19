require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg"); ;
const app = express();
const db = require("./models/index.js");
const studentsRoutes = require("./routes/student.routes.js");
const coursesRoutes = require("./routes/course.routes.js");


let PORT = 8082;


app.use(express.json());
app.use("/students",studentsRoutes);
app.use("/courses",coursesRoutes);


db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

//const pool = new Pool({
//      user: process.env.PGUSER,
//      host: process.env.PGHOST,
//       database: process.env.PGDATABASE,
//       password: process.env.PGPASSWORD,
//       port: process.env.PGPORT,
//});
//pool.connect();

app.listen(PORT, () => {
  console.log("Server Listening at", PORT);
});