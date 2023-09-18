const CourseService = require("../services/students.service.js");
const courseServiceInstance = new CourseService();

const getAllCourses = async (req, res) => {
  try {
    const courses = await StudentServiceInstance.getALl();
    res.json(courses);
  } catch (error) {
    res.status(404).json({ message: "Could Not Fetch courses from DB", error });
  }
};

module.exports = getAllCourses;