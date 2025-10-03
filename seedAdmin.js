import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

async function createAdmin() {
    await mongoose.connect(process.env.MONGO_URI);

    const hashedPassword = await bcrypt.hash("password123",10);

    const adminUser = new User({
        username: "admin",
        email: "admin@pastry.com",
        passwordHash: hashedPassword,
        role: "admin"
    });

    await adminUser.save();
    console.log("Admin user created:", adminUser);
    mongoose.connection.close();
}

createAdmin().catch(err => console.error(err));
