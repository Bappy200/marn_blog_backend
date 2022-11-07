const Blog = require("../models/Blog");

// add comment
const addComment = async(req, res)=>{
    try{
        const blogId = req.params.blogid
        console.log(req.body)

        await Blog.findByIdAndUpdate(
            blogId,
            {$push:{"comments": req.body}},
            {  safe: true, upsert: true},
            function(err, model) {
                if(err){
                   console.log(err);
                   return res.send(err);
                }
                 return res.json(model);
            }
        )
    }catch(error){
        res.status(500).json({error});
    }
}

// const getComment = async(req, res)=>{

// }
//delete comment

module.exports = {addComment}