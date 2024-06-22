import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const db_connect = async ()=>{
    try{
        // console.log(process.env.MONGODB_URI)
         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Great! Database connected!! DB HOST :  ${connectionInstance.connection.host}`) //kis database se hum connect ho rahe hain

    }
    catch(error){
         console.log("Error in connecting MongoDb database!! ",error);
         process.exit(1)
    }

}

export default db_connect