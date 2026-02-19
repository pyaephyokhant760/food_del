import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

// app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connect
connectDB();
//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})

//mongodb+srv://food:221531@cluster0.8e2foex.mongodb.net/?appName=Cluster0

