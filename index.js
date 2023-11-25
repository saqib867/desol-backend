// mongodb password "H1D8s1amGTode7Ta"

import express from 'express'
import cors from 'cors'
import authrouter from './routes/user.route.js'
import carRouter from './routes/car.route.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  })
  app.use((req, res, next) => {
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });
// database connection

const uri = 'mongodb+srv://husainsaqib31:moeZBOfDWvG9yC1d@cluster0.kbgs5wm.mongodb.net/desol?retryWrites=true&w=majority'

const connection = mongoose.connect(uri)
connection.then(()=>{
       console.log("mongodb connected successfully")
})
.catch((err)=>{
        console.log("error while connecting database",err)
})

app.use('/api',authrouter)
app.use('/api',carRouter)  


const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
       console.log("server is running on port ",PORT)
})