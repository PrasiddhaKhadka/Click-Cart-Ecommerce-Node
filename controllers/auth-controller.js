const UserSchema = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require("../errors")
const { isTokenValid, attachCookiesToResponse } = require('../utils')

const register = async(req,res)=>{
    const {email,name,password} = req.body
    const emailAlreadyExits = await UserSchema.findOne({email})

    if(emailAlreadyExits){
        throw new CustomAPIError.BadRequestError("Email Already Exists")
    }

    const user = await UserSchema.create({name, email,password})
    const tokenUser = {user: name, user_id:user._id}
    attachCookiesToResponse({res,user: tokenUser});
    res.status(StatusCodes.CREATED).json({msg:'Success',user:tokenUser})

}


const login = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        throw new CustomAPIError.BadRequestError('Email or Password Invalid')
    }
    const user = await UserSchema.findOne({email});
    if(!user){
        throw new CustomAPIError.UnauthenticatedError('Invalid Credentials')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new CustomAPIError.BadRequestError('Password is Incorrect')
    }

    const tokenUser = {userId:user._id, user:user.name}
    attachCookiesToResponse({res,user:tokenUser})
    res.status(StatusCodes.OK).json({msg:'Success',user:tokenUser})
}

const logout = async(req,res)=>{
    res.status(200).json({msg:'Hello World From Logging Out!'})
}


module.exports = {register, login, logout}