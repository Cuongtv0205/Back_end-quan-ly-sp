import express from "express";
import mongoose from "mongoose";
import cors from "cors"

import {router} from "./src/router/router";
const DB_URL = 'mongodb://localhost:27017/product_demo';
mongoose.connect(DB_URL).then(() => {
    console.log('Db connected')
}
).catch((err)=>{
    console.log(err)
})
const app = express();
app.use(express.json())
app.use(cors())
app.use('', router);
app.listen(3000 , () => {
    console.log('---Server is running---')
})