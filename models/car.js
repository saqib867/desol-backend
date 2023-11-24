import mongoose from 'mongoose'

const carSchema = new mongoose.Schema({

            carModal:{
                  type:String
                  
            },
            price:{
                  type:Number
            },
            phone:{
                  type:String
            },
            numberOfPicture:{
                  type:Number
            },
            pictures:{
                  type:Array,
                  default:[]
            }
},
{timestamps:true}
)

const Car = mongoose.model('cars',carSchema)
export default Car