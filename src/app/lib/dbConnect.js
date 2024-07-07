import mongoose from 'mongoose';
const connection = {}
async function dbConnect() {
    try {
        if (connection.isConnect) {
            console.log("database alredy connected");
            return;
        }
        const conn = await mongoose.connect(process.env.MONGO_URI, { dbName: "kokkari" });
        connection.isConnect = conn.connections[0].readyState;
        console.log("database connected successfuly:", conn.connection.host);
    } catch (error) {
        console.log("database connection error: ", error);
    }
}

export default dbConnect;