import mongoose from "mongoose";
import userSchema from "../users/schema";
const criticSchema = new mongoose.Schema({
    expertise: String,
    ...userSchema.obj,
  },
  { collection: "critics" }
);

export default criticSchema;