module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    course_enrolled: {
      type: Sequelize.STRING
    }
  });

  return Student;
 };

