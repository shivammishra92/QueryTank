import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import db_connect from "./src/db/db.js"//db file imported here
import router from './src/routers/index.js'
import path from 'path'

const PORT = process.env.PORT || 5000
const app = express()



//db connection

dotenv.config({
    path:"./.env"
});

db_connect()




//middlewares

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));




//setting headers

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});


//setting API
app.use("/api", router);

//static resource set-up
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));


// Defines a default route handler to serve the React frontend.
// It attempts to serve the index.html file from the /frontend/build directory.
app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  } catch (e) {
    res.status(400).send({
        status: false,
        message: "Error while connecting to QueryTank..." 
     })
  }
});


//cors

app.use(cors())

//app listen
app.listen(PORT, () => {
    console.log(`QueryTank API is running on PORT No- ${PORT}`);
  })