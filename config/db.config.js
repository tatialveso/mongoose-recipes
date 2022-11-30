import mongoose from "mongoose";
import Recipe from "../models/Recipe.model.js";

async function connect() {
    try {
        const dbConnection = await mongoose.connect(process.env.MONGODB_URI)
        
        console.log(`Connected to the database: "${dbConnection.connection.name}"`);
        
        return Recipe.deleteMany()
    } catch (error) {
        console.log('Error connecting to the database', error);
    }
}

export default connect