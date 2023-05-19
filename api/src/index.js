import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import messageRoute from "./routes/messageRoute.js";
import './database/sequelize.js';


const app = express();
const port = 8090;

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/messages", messageRoute );

app.listen(port, ()=>{
  console.log("App is running!!!");
})