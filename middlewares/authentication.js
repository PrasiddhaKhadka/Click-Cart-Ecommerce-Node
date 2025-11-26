// const authenticationMiddleware = async(req,res,next)=>{
//     const authHeader = req.headers.authorization;
//     if(!authHeader && authHeader.startsWith('Bearer')){
//         // throw new UnauthorizedError('Authentication Invalid')
//     }
//     const token = authHeader.split(' ')[1]
//     try {
//         const payload = await jwt.verify(token,process.env.JWT_SECRET)

//     } catch (error) {
        
//     }
//     next()
// }

// module.exports = authenticationMiddleware;