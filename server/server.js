const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const studentsRouter = require('./routes/studentRoute')
const db = require('./DB')
const PORT = process.env.PORT || 8080;
const app= express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

db.on('error',()=>{console.log("connection fail")});


app.listen(PORT,()=>{
    console.log("server up!");
})

app.use('/students',studentsRouter)


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }
