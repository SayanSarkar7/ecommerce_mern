class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
        // console.log(this.statusCode, statusCode);
        
        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports=ErrorHandler;
