import express from "express";
import cookieparser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({});
const app = express();






app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
const corsOptions = {
    origin:'http/localhost:5173',
    Credentias:true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    connectDB();

    console.log(`server running at port ${PORT}`);
})