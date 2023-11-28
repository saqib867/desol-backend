// mongodb password "H1D8s1amGTode7Ta"

import express from 'express'
import cors from 'cors'
import authrouter from './routes/user.route.js'
import carRouter from './routes/car.route.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
const corsOptions = {
       origin: 'http://localhost:3000', // Replkjhlkjhjkhace with your frontend URL
       methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', ///lkajsdflkja;sdlf
       credentials: true,
     };
     
     app.options(cors(corsOptions));
app.use('*',cors(corsOptions));

// database connection

const uri = 'mongodb+srv://husainsaqib31:moeZBOfDWvG9yC1d@cluster0.kbgs5wm.mongodb.net/desol?retryWrites=true&w=majority'

const connection = mongoose.connect(uri)
connection.then(()=>{       //lkjhkljlj
       console.log("mongodb connected successfully")
})
.catch((err)=>{
        console.log("error while connecting database",err)
})

app.use('/api',authrouter)
app.use('/api',carRouter)  


const PORT =process.env.PORT || 4000
app.listen(PORT,()=>{
       console.log("server is running on port ",PORT)
})