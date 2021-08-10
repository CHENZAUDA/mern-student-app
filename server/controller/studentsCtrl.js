const studentsModel = require('../models/studentModells');



const getAllStudent = async (req, res) => {
    try {
          await studentsModel.find({}, (err, result) => {
            if (err) console.log(err);
            res.json({ massage: "success", data: result })
        })
    } catch (err) {
        res.json({ massage: "problem in database", error: err });
    }
}

const addStudent = async (req, res) => {
    try {
       await studentsModel.insertMany(
            req.body.students,
            (err, result) => {
                if (err) console.log(err);
                res.json({ massage: "add student", data: req.body.students });
            })
    } catch (err) {
        res.json({ massage: "adding is failing", error: err });
    }
}

const updateStudent = async (req, res) => {
    try {
         await studentsModel.findByIdAndUpdate(
            req.params.id,
            req.body.students,
            (err, result) => {
                if (err) throw err;
                res.json({ massage: `${req.body.students.firstName} update students` });
            })
    }
    catch (err) {
        res.json({ massage: "problem withe update", error: err });
    }
}

const deleteStudent = async (req, res) => {
    try {
        await studentsModel.findByIdAndDelete (req.params.id, (err, result) => {
            if (err) throw err;
            res.json({ massage: "delete student success"  })
        })
    }
    catch (err) {
        res.json({ massage: "problem with update", error: err });

    }
}

const getStudentByName = async (req, res) => {
    try {
         await studentsModel.find({firstName:req.params.firstName}, (err, result) => {
            if (err) console.log(err);
            res.json({ massage: "success", data: result })
        })
    } catch (err) {
        res.json({ massage: "problem in database", error: err });
    }
}

module.exports = {
    getAllStudent,
    addStudent,
    updateStudent,
    deleteStudent,
    getStudentByName
}
