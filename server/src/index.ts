import dns from 'node:dns';

dns.setServers(['8.8.8.8', '1.1.1.1']);

import dotenv from "dotenv";
import connectDB from "./config/database"
import path from 'path';
import app from './app';
import {Request, Response} from 'express';

dotenv.config({
    path: path.join(
        __dirname,"../.env.local") });

const startServer = async () =>{
    try{
        console.log('STARTING....')
        await connectDB();

        const port = Number(process.env.PORT) || 8080;

        app.listen(port, ()=>{
            app.get('/', (req:Request, res: Response)=>{
                res.send('hellow');
            })
            console.log(`Server is running on port: ${port}`);
        })
    }
    catch(err){
        console.log('MONGO ERROR');
    }
}

startServer();