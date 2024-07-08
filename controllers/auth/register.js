import bcrypt from 'bcryptjs';
import User from "../../models/user.js";

const register = async(req, res) => {
const {email, password} = req.body;

const normalizeEmail = email.toLowerCase();
    
const user = await User.findOne({email: normalizeEmail});
  

if(user) {
    return res.status(409).json({ message: 'Email in use' }); 
}

const hashPassword = await bcrypt.hash(password, 10);

const newUser = await User.create({...req.body, email: normalizeEmail, password: hashPassword});

    
    
    res.status(201).json({
        email: newUser.email,
        name: newUser.name
    })
    }



    export default register;
    