import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
import User from "../../models/user.js";

const {SECRET_KEY} = process.env;

const login = async (req, res) => {
    const {email, password} = req.body;
    const normalizeEmail = email.toLowerCase();
    const user = await User.findOne({email: normalizeEmail});

     
    
    if(!user) {
        return res.status(401).json({ message: `Користувача з email ${normalizeEmail} не існує!` }); 
    }
    
    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare) {
        return res.status(401).json({ message: 'Невірний пароль! Спробуйте ще!' }); 
    }
    const payload = {
        id: user._id,
    }
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "24h"});
    await User.findByIdAndUpdate(user._id, { $set: { token } });
    res.status(201).json({
    token
    })
    }
   
    export default login;