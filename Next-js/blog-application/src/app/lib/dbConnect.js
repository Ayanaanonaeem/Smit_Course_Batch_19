import mongoose from "mongoose"

export async function connectDB(){
    let isConnected=false
    if(isConnected)return "db is already connected"
    try {
        let connected=await mongoose.connect(process.env.MONGODB_URI)
        console.log("db is connected successfully..")
        if(connected.connection.readyState==1)isConnected=true;
    } catch (error) {
        console.log(error);
        
    }
}  