const express = require("express");
const getAllStudents = require("../controllers/student.controller.js");
const router = express.Router();

router.get("/",getAllStudents);
//router.get("/:studentId",searchStudentById);
//router.get("/:StudentId/courses",getALlStudentsByCourseId);

module.exports = router;