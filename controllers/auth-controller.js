const register = async(req,res)=>{
    res.status(200).json({msg:'Hello World from Register'})
}


const login = async(req,res)=>{
    res.status(200).json({msg:'Hello World from Login'})
}


module.exports = {register, login}