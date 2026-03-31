import app from "./src/app.js";
import "dotenv/config";


const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`);
})