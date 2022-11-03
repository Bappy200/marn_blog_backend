const User = require("../models/User");
const CryptyJs = require("crypto-js");
const { json } = require("body-parser");
const jwt = require("jsonwebtoken");

// new account register
const register = async(req, res)=>{
    try{
        const {name, profileImage, email, password, createAt} = req.body;
        const enPassword = CryptyJs.AES.encrypt(
            password,
            process.env.CryptoJS_SEC
        ).toString();

        const newUser = new User({
            name,
            profileImage,
            email,
            password: enPassword,
            createAt
        })

        await newUser.save();
        res.status(200).json(newUser);
    }catch(error){
        res.status(501).json(error);
    }
}


//login 
const login = async(req, res)=>{
    const {password, email} = req.body;
    try{
        const userFind = await User.findOne({email});
        !userFind && res.status(401).json("No Accoutn find");
      
        const dbPasswordDecrypt = CryptyJs.AES.decrypt(userFind.password, process.env.CryptoJS_SEC);
        const dbPassword = dbPasswordDecrypt.toString(CryptyJs.enc.Utf8)

        if (dbPassword !== password){
            res.status(401).json("Email and password not mach")
        }else{
            const {password, ...user} = userFind._doc;
            const jwtTocken = jwt.sign(
                    {
                        id: user['_id']
                    },
                    process.env.JWT_SEC,
                    {expiresIn:"5d"}
                )
            
            res.status(201).json({...user, jwtTocken})
        }


    }catch(error){
        res.status(501, json(error));
    }
}
module.exports = {register, login}