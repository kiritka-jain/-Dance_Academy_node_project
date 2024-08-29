const express = require("express");
const {getAllStudents, createStudent} = require("../controllers/student.controller.js");
const router = express.Router();

router.get("/",getAllStudents);
router.post("/create",createStudent);
//router.get("/:studentId",searchStudentById);
//router.get("/:StudentId/courses",getALlStudentsByCourseId);

module.exports = router;