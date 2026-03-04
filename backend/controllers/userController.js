import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success: false, message: "User not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.json({success: false, message: "Invalid password"})
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"});
        res.json({success: true, token})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error logging in"})
    }
}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"});
}

//register user
const registerUser = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        // checking is user already exists
        const user = await userModel.findOne({email});
        if(user){
            return res.json({success: false, message: "User already exists"})
        }
        // validating email
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "Invalid email"})
        }
        // checking password length
        if(password.length < 8){
            return res.json({success: false, message: "Password must be at least 6 characters long"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            name:name,
            email:email,
            password: hashedPassword
        })
        await newUser.save();
        const token = createToken(newUser._id);
        res.json({success: true, token})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error registering user"})
    }
}

export {loginUser, registerUser}
