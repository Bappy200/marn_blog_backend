const Blog = require("../models/Blog");

//get all blogs
const getsBlog = async(req, res)=>{
    try{
        const blogs =await Blog.find({});
        res.status(200).json(blogs);
    }catch(error){
        res.status(500).json({error});
    }
}

//get a blog
const getBlog = async(req, res)=>{
    try{
        const id = req.params.id;
        const blogs =await Blog.findById({id});
        res.status(200).json(blogs);
    }catch(error){
        res.status(500).json({error});
    }
}

// create new blog
const createBlog = async(req, res)=>{
    try{
        const {userId, title, image, desc, category} = req.body;
        const newBlog = new Blog({
            userId,
            title,
            image,
            desc,
            category,
        });

        await newBlog.save();
        res.status(200).json(newBlog);
    }catch(error){
        res.status(500).json({error})
    }
}

//delete blog
const deleteBlog = async(req, res)=>{
    try{
        const id = req.params.id;
        console.log("hello ", id)
        console.log(id)
        const deleteItem = await Blog.findByIdAndDelete(id);
        res.status(201).json(deleteItem);

    }catch(error){
        res.status(500).json({error})
    }
}

//update blog 
const updateBlog = async(req, res)=>{
    try{
        const id = req.params.id;
        console.log(id)
        const {title, image, desc, category} = req.body;
        const updateData = {
            title,
            image,
            desc,
            category,
        };

        await Blog.findByIdAndUpdate(id, {...updateData}).then((data)=>{
            res.status(201).json(data);
    }).catch(error=>{
        res.status(501).json({error});
    })
    }catch(error){
        res.status(500).json({error});
    }
}

module.exports = {
    getBlog,
    getsBlog,
    createBlog,
    deleteBlog,
    updateBlog
}