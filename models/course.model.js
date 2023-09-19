module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("course", {
    name: {
      type: Sequelize.STRING
    },
    info: {
      type: Sequelize.STRING
    },
    duration_in_months: {
      type: Sequelize.NUMERIC
    }
  });

  return Course;
};