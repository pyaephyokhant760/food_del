import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect("mongodb+srv://food:221531@cluster0.8e2foex.mongodb.net/food-del")).isObjectIdOrHexString(() => console.log("DB Connected"));
}