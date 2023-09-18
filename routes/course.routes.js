const express = require("express");
const getAllCourses = require("../controllers/course.controller.js");
const router = express.Router();

router.get("/",getAllCourses);
//router.get("/:courseId",courseInfo);
//router.get("/search",getCoursesWithName);
//router.get("/:courseId/students",getALlStudentsByCourseId);
//router.post("/:courseId/enroll/:studentId", enrollStudent);



module.exports = router;