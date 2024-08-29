const db = require("../models");
const Students = db.students;
const Op = db.Sequelize.Op;


class StudentService {

    getAll = async ()=>{ Student.findAll()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving students."
          });
        });
};

    create = async ()=>{ Student.create(student)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the student."
          });
        });}


}
module.exports = StudentService;