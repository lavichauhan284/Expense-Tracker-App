//RQmmU52DAeKVJi71

import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

 export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://lavichauhan284_db_user:RQmmU52DAeKVJi71@cluster0.4ufv1el.mongodb.net/ExpenseTracker")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
}