import express  from "express"; 
const app = express();
import dotenv from 'dotenv';
// import all routes
import productRoutes from "./routes/products.js";
import { connectDatabase } from "./config/dbConnect.js";

dotenv.config({path: "backend/config/config.env"});

//
connectDatabase();
 
app.use(express.json());


app.use("/api/v1",productRoutes);



app.listen(process.env.PORT, () => {
    console.log(
        `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_env} node.`
    );

});


