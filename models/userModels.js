const mongoose = require('mongoose')


// making schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
})

const User = mongoose.model("user", userSchema)
module.exports = User;