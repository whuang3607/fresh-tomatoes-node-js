import mongoose from "mongoose";
import adminSchema from "./admin_schema";
const adminModel = mongoose.model("admin", adminSchema);
export default adminModel;