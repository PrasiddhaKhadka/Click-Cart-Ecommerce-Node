const UserSchema = require('../models/User')
const CustomAPIError = require('../errors')
const { StatusCodes } = require('http-status-codes')

const getAllUsers = async(req,res)=>{
    const users = await UserSchema.find({role:'user'}).select('-password');
    res.status(StatusCodes.OK).json({msg:'Success',users:users})
}

const getSingleUser = async(req,res)=>{
    const id = req.params.id;
    const user = await UserSchema.findOne({_id:id, role:'user'}).select('-password');
    if(!user){
        throw new CustomAPIError.NotFoundError(`User with ${id} not found`);
    }
    res.status(StatusCodes.OK).json({
        msg:"Success",
        user:user
    })
}


const showCurrentUser = async(req,res)=>{

    res.status(200).json({msg:"Hello World from show current User"})
}

const updateUser = async(req,res)=>{
    res.status(200).json({msg:"Hello World from update current User"})
}

const updateUserPassword = async(req,res)=>{
        res.status(200).json({msg:"Hello World from update password current User"})
}

const deleteUser = async(req,res)=>{
    res.status(200).json({msg:"Hello World from delete password current User"})
}

module.exports={
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword,
    deleteUser,
}