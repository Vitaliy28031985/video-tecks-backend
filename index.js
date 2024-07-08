import app from "./app.js";

import mongoose from 'mongoose';


const {DB_HOST} = process.env;


mongoose.connect(DB_HOST)
.then(app.listen(4000, () => {
  console.log("Database connection successful")
}))
.catch(error => {
  console.log(error.message);
  process.exit(1);
})

//eaTPrwwz5IVRSObN  vitaliipiddubchak 