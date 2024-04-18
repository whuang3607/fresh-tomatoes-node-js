import mongoose from "mongoose";
import userSchema from "../users/schema";
const adminSchema = new mongoose.Schema({
    permission: {
        type: String,
        enum: ["EDIT", "VIEW"],
        default: "EDIT" },
    ...userSchema.obj,

  },
  { collection: "audience" });

export default adminSchema;
