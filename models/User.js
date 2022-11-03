const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    profileImage:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    desc:{
        type: String
    },
    createAt:{
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model("User", UserSchema)