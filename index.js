// mongodb password "H1D8s1amGTode7Ta"

import express from 'express'
import cors from 'cors'
import authrouter from './routes/user.route.js'
import carRouter from './routes/car.route.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const corsOptions = {
    origin: ['https://desol-frontend-two.vercel.app','http://localhost:3000'],
    allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Methods", "Access-Control-Request-Headers"],
    credentials: true,
    enablePreflight: true
}

app.use(cors(corsOptions));
app.options('*', cors(corsOptions))
// database connection
app.use(express.json())     //hgkhghj
app.use(bodyParser.json())
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