import mongoose from 'mongoose';

const { Schema, model } = mongoose;

 const userSchema = Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: { 
        type: String,
        minlength: 6,
        required: true
     },    
     token: {
        type: String,
        default: null
      },
   
    }, {versionKey: false, timestamps: true})
    
    const User = model("user", userSchema);

    export default User;