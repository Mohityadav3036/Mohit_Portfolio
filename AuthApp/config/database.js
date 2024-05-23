const mongoose = require("mongoose")

require('dotenv').config();
exports.connect = () => {
    mongoose.connect(process.env.MONGODB,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => {
        console.log("DB connection is successfully")
    })
    .catch((error) => {
        console.log("DB connection is failed")
        console.error(error)
        process.exit(1)
    })    
}