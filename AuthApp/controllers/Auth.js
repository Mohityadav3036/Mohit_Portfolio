const bcrypt = require("bcrypt")
const User = require("../models/User")
const jwt = require("jsonwebtoken")
require("dotenv").config();
//  signup Controller
exports.signup = async (req,res) => {
             try{
                        const {name,email,password,role} = req.body;
                        const existingUser = await User.findOne({email});
                        if(existingUser)
                        {
                            return res.status(400).json({
                                success:false,
                                message:'User is already exists'
                            })
                        }

                        let hashedPassword;
                        try{
                            hashedPassword = await bcrypt.hash(password,10);
                        }
                        catch(error){
                                    return res.status(500).json({
                                        success:false,
                                        message:'hashpassword throw an error'

                                    })
                        }

                        const user = await User.create({
                            name,email,password:hashedPassword,role
                        })
 
                        return res.status(200).json({
                            success:true,
                            message:'Antity will updated successfully the new membre will added '
                        })
             }
             catch(error){
                // console.error(error);
                res.status(400).json({
                    success:false,
                    message:"there are some interenal issuse"
                })
             }  
}

// login page

exports.login = async (req,res) => {
    try {
         
        const { email, password} = req.body;
        if(!email || !password)
        {
            return res.status(400).json({
                success:false,
                message:"please entre details carefully"
            })
        }

        const user = await User.findOne({email});
        if(!user)
        {
            return res.status(401).json({
                success:false,
                message:"the User is not signin so please registor"
            })
        }
        const payloader = {
         email: user.email,
         id: user._id,
         role: user.role,
         }
        if(await bcrypt.compare(password,user.password))
        {
                let token = jwt.sign(payloader, process.env.JWT_SECURATE,{

                    expiresIn:"2h",
                });

                // user = user.toObject();
                // user.token = token;  
                // user.password = undefined;
                const userObject = user.toObject();
                userObject.token = token;
                delete userObject.password;

                const options = {
                    expires:   new Date(Date.now() + 3 * 24 * 60* 60 * 1000),
                    httpOnly:true,
                }
                res.cookie("token",token,options).status(200).json({
                    success:true,
                    token,
                    user,
                    messaage:"cookies creaate successfully"
                })
        }
        else{
            return res.status(402).json({
                success:false,
                message:"the password is incorrect"
            })
        }

    } catch (error) {
         
        //  console.log(error);
         res.status(500).json({
            success:false,
            message:"Login Failed",
         });    
    }
}