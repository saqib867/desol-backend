import mongoose from "mongoose";
import Car from "../models/car.js";

export const carData = async(req,res)=>{

        const {carModal,numberOfPicture,pictures,phone,price} = req.body
        const newResponse = new Car({carModal,numberOfPicture,pictures,phone,price})
        try {
            
              const response = await newResponse.save() 
              res.status(201).json({user:response})

        } catch (error) {
            
              res?.status(500).json({message:'some thing went wrong.internal server error'})
        }
}