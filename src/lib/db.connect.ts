import mongoose from "mongoose";

type ConnectionObject ={
    isConnected?:number

}

const Connection : ConnectionObject={};

async function dbConnect():Promise<void>{

    if(Connection.isConnected){
        console.log("DataBase is Already Connected");
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URL || '' , {})
        Connection.isConnected=db.connections[0].readyState
        console.log("DataBase is Connected Successfully")
        
    } catch (error) {

        console.error("Database Connection Failed" , error);
        process.exit(1);
        
    }

}

export default dbConnect;