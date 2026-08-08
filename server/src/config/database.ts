import mongoose from 'mongoose';

const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`,{
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            tls: true,
            retryWrites: true,
            authSource: "admin"
        });
        console.log(`/n MONGO DB Connected!! :) ${connectionInstance.connection.host}`);
    }
    catch(err){
        console.log(err);
        process.exit(0);
    }
}

export default connectDB;