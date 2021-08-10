const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    email:{
        type:String,
        required: false
    },
    date:{
        type:Date,
        required: false,
        default:Date.now()
    },
});

const studentsModel = mongoose.model('students',studentSchema)


module.exports = studentsModel;
