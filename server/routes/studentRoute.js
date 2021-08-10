const express = require('express');
const studentRoute = express.Router()
const stuCtrl = require('../controller/studentsCtrl')


studentRoute.get('/',stuCtrl.getAllStudent);
studentRoute.post('/',stuCtrl.addStudent);
studentRoute.put('/:id',stuCtrl.updateStudent);
studentRoute.delete('/:id',stuCtrl.deleteStudent);
studentRoute.get('/:firstName',stuCtrl.getStudentByName);


module.exports = studentRoute;