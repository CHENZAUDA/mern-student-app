const mongoUrl = process.env.MONGO_URL 
const mongoose = require('mongoose');

mongoose.connect(mongoUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false 
    })
    .then(console.log("database mongoose connect"))
    .catch(error => { console.error("connection error ", error.message); })


module.exports = mongoose.connection;