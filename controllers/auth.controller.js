import mongoose from "mongoose";
import User from "../models/user.js";

export const authLogin =async(req,res)=>{

    const {email,password} = req.body
          
      try {

          const response = await User.findOne({email})
          if(!response) return res.status(404).json({data:{},message:'User not found by this email'})
          if(password != response.password) return res.status(403).json({data:{},message:"Incorrect Password"})
           const {password:pass,...rest} = response._doc
           res.status(200).json({data:rest,message:'User logged in successfully'})

      } catch (error) {
           res.status(500).json({data:{},message:'something went wrong'})
      }
        
}