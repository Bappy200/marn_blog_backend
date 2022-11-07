const mongooes = require("mongoose");

const BlogSchema = mongooes.Schema({
    userId:{
        type: mongooes.Types.ObjectId,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true,
    },
    desc:{
        type: String,
        require: true
    },
    likes:[mongooes.Types.ObjectId],
    comments:[commentSchema],
    category:[{type: String}],
    createAt: {
        type: Date,
        default: Date.now()
    }
    
})

const commentSchema = mongooes.Schema({
    comment_user_id: {
        type: mongooes.Types.ObjectId,
        require: true
    },
    feedback:{
        type: String,
        require: true
    },
    createAt:{
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongooes.model("Blog", BlogSchema);