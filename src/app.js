import express from "express"
import cors from "cors"
import helmet from "helmet"
import "dotenv/config"


const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());




// import pool from "../config/dbConfig.js";

// app.get("/dbtest",async(req, res)=>{

//     const result = await pool.query("select now()");

//     console.log("Time:", result.rows[0]);
//     res.json({time : result.rows[0]});
// })






app.get("/", (req, res)=>{
    res.json({status: "ok"})
})



import router from "./routes/route.js";

app.use("/api/v1", router);



app.use((req, res)=>{
    res.status(404).json({message : "route not found"})
})



export default app;




