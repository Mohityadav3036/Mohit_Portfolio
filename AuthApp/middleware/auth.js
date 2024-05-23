const jwt = require("jsonwebtoken")
require('dotenv').config()

exports.auth = (req,res,next) => {
             try {
                 const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ","");

                 if(!token || token === undefined){
                    return res.status(400).json({
                        success:false,
                        message:"TOken are Missing in it."

                    })
                 }

                 try{
                    const decode = jwt.verify(token,process.env.JWT_SECURATE)
                    console.log(decode);
                    req.user = decode;
                 }
                 catch(error){
                     return  res.status(401).json({
                        success:false,
                        message:"Token os invalid"
                       })
                 }
                 next();

             } catch (error) {
                 return res.status(401).json({
                    success:false,
                    message:"Something went wrong,in verify the token"
                 })
             }
}


exports.isStudent = (req,res,next) => {
    try {
      

        if(req.body.role!="Student"){
           return res.status(400).json({
               success:false,
               message:"Student are Missing in it."

           })
        }

        next();

    } catch (error) {
        return res.status(401).json({
           success:false,
           message:"user not matchinig "
        })
    }
}

exports.isAdmin = (req,res,next) => {
    try {
      

        if(req.body.role!="Admin"){
           return res.status(400).json({
               success:false,
               message:"Admin are Missing in it."

           })
        }

        next();

    } catch (error) {
        return res.status(401).json({
           success:false,
           message:"user not matchinig "
        })
    }
}