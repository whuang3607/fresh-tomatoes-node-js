import mongoose from "mongoose";
import ReviewSchema from "./review_schema.js";
const review_model = mongoose.model("reviews", ReviewSchema);
export default review_model;