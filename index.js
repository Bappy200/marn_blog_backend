const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyPerser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 5001

//routers
const userRouter = require("./routers/User");
const blogRouter = require("./routers/Blog")
const commentRouter = require("./routers/Comment");


//middleware
app.use(cors())
app.use(bodyPerser.json())

app.use("/", userRouter);
app.use("/blog", blogRouter);
app.use("/comment", commentRouter);


//DB CONNECTION
//db connect
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch((err) => console.error(err));


app.listen(PORT,()=>{
    console.log(`Example app listening on port ${PORT}`)
})