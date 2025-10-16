import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

async function seedProducts() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`✅ Connected to MongoDB: ${mongoose.connection.name}`);

        // Optional: clear existing products to avoid duplicates
        await Product.deleteMany({});
        console.log("🧹 Cleared existing products");

        // Insert new sample data
        const products = [
            {
                name: "Chocolate Fudge Cake",
                description: "Rich, moist chocolate cake with creamy fudge frosting.",
                price: 25.99,
                category: "Cakes",
            },
            {
                name: "Red Velvet Cupcake",
                description: "Soft red velvet cupcakes topped with cream cheese frosting.",
                price: 4.99,
                category: "Cupcakes",
            },
            {
                name: "Blueberry Cheesecake",
                description: "Classic cheesecake with blueberry topping and buttery crust.",
                price: 30.5,
                category: "Cheesecake",
            },
            {
                name: "Custom Celebration Cake",
                description: "Fully customizable cake for any occasion.",
                price: 45.0,
                category: "Custom",
            },
            ];

            await Product.insertMany(products);
            console.log("🍰 Sample products added successfully!");

            // Disconnect
            await mongoose.disconnect();
            console.log("🔌 Disconnected from MongoDB");

    } catch (err) {
        console.error("❌ Error seeding products:", err);
        process.exit(1);
    }
}

seedProducts();
