const express = require("express");
const router = express.Router();

const {login, signup}  =  require("../controllers/Auth")
const {isStudent, isAdmin, auth} = require('../middleware/auth')
router.post("/login",login)

router.post("/signup",signup)


router.get('/test', auth, (req,res)=>{
    res.json({
     success:true,
     message:"welcome to Test  section"
    })
})


router.get('/student', auth, isStudent, (req,res)=>{
       res.json({
        success:true,
        message:"welcome to student section"
       });
    })
       
       router.get('/admin', auth, isAdmin, (req,res)=>{
        res.json({
         success:true,
         message:"welcome to Admiin  section"
        })
})

module.exports = router;