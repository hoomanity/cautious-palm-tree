import express from "express";
import cors from 'cors'
import './db.js'
import authRoutes  from "./routes/auth.js"
import userRoutes  from "./routes/users.js"
import postRoutes  from "./routes/posts.js"


const app = express()
app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)


app.listen(8800,()=>{
    console.log("Server is running!")
})