import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import db_connect from "./src/db/db.js"//db file imported here

const PORT = process.env.PORT || 5000
const app = express()



//db connection

dotenv.config({
    path:"./.env"
});

db_connect()


//middlewares





//setting headers




//setting API





//static resource set-up






//cors





//app listen