const StudentService = require("../services/students.service.js");
const studentServiceInstance = new StudentService();

const getAllStudents = async (req, res) => {
  try {
    const students = await studentServiceInstance.getAll();
    res.json(students);
  } catch (error) {
    res.status(404).json({ message: "Could Not Fetch student from DB", error });
  }
};

const createStudent = async(req, res) => {
      if (!req.body.name) {
        res.status(400).send({
          message: "Student name can not be empty!"
        });
        return;
      }

      // Create a Student
      const Student = {
        name: req.body.name,
        email: req.body.email,
        course_enrolled: req.body.course_enrolled
      };
      try {
        const createdStudent = await studentServiceInstance.create(student);
        res.json(students);
      } catch (error) {
        res.status(404).json({ message: "Could Not create student in DB", error });
  }


};

module.exports = {
    getAllStudents,
    createStudent
};