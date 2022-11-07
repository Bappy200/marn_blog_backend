const mongooes = require("mongoose");

const CommentSchema = new mongooes.Schema({
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
