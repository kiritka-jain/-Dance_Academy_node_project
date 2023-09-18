const express = require("express");
const studentsRoutes = require("./routes/student.routes.js");
const coursesRoutes = require("./routes/course.routes.js");
const app = express();

let PORT = 8082;

app.get("/",(req,res)=>{
    res.send("Hello World...")
})
app.use("/students",studentsRoutes);
app.use("/courses",coursesRoutes);

app.listen(PORT, () => {
  console.log("Server Listening at", PORT);
});