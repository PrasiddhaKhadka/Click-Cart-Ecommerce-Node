const { CustomAPIError } = require("../errors")
const { StatusCodes } = require('http-status-codes');


const errorHandler = async(err,req,res,next)=>{
    let customError = {
        statusCode: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
        msg:err.msg || 'Something went wrong'
    }
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).send(err.message)
    }
    if(err.name == 'ValidationError'){
        customError.msg = Object.values(err.errors).map((e)=> e.message).join(',')
        customError.statusCode = 400
    }
    if (err.name === 'CastError') {
    customError.msg = `No item found with id : ${err.value}`;
    customError.statusCode = 404;
    }
    
   return res.status(customError.statusCode).json({ msg: customError.msg });

}

module.exports = errorHandler