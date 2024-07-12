import express, { Express, Request, Response} from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { registerRoutes } from './Routes'

dotenv.config()

const PORT:string | number = process.env.PORT || 5000;

const app: Express = express();


app.use(express.json())
app.use(cors())

//routes
registerRoutes(app)

//connection to database
const uri:string = process.env.MONGO_URI || 'mongodb+srv://Graduating-project:HMut9cSQlnkiifjP@agrigrow.xxtjpnx.mongodb.net/?retryWrites=true&w=majority&appName=Agrigrow';


(async function connectToDb() {
    try{
        await mongoose.connect(uri)

        console.log('Connection to database successful')
    } catch (error) {
        console.error(error)
    }
}) ();


app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})