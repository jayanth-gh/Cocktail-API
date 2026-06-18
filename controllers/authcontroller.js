const User = require('../models/auth')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req,res)=>{
    try{
        const existingUser = await User.findOne({
            email: req.body.email
        })
        if(existingUser){
            return res.status(400).json({
                message: "User already exists"
            })
        }
        const hashedpassword = await bcrypt.hash(req.body.password,10)

        const newuser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedpassword
        })
        res.status(201).json({
            message: "User registered",newuser
        })
    } catch(err){
        console.log(err)
        res.status(500).json({
            message:err
        })
    }
}

const login = async (req,res)=>{
    try{
        const user = await User.findOne({
            email: req.body.email
        })
        if(!user){
            return res.status(400).json({
                message:"user not found"
            })
        }

        const ismatch = await bcrypt.compare(req.body.password,user.password)

        if(!ismatch){
            return res.status(400).json({
                message:"Invalid password"
            })
        }
        const token = jwt.sign({
            id:user._id
        },"mykeypswrd",{
            expiresIn:"7d"
        })
        res.json({
            message:"Login Succesfull",token
        })
    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

module.exports = {
    register,
    login
}