import mongoose from "mongoose";
import criticSchema from "./critics_schema";
const criticsModel = mongoose.model("critics", criticSchema);
export default criticsModel;