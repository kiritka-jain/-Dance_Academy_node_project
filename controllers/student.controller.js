const StudentService = require("../services/students.service.js");
const studentServiceInstance = new StudentService();

const getAllStudents = async (req, res) => {
  try {
    const students = await StudentServiceInstance.getALl();
    res.json(students);
  } catch (error) {
    res.status(404).json({ message: "Could Not Fetch student from DB", error });
  }
};

module.exports = getAllStudents;