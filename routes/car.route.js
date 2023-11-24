import mongoose from "mongoose";
import express from 'express'
import { carData } from "../controllers/car.controller.js";


const router = express.Router()

router.post('/car',carData)

export default router
