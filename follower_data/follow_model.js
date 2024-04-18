import mongoose from "mongoose";
import FollowSchema from "./follow_schema.js";
const follow_model = mongoose.model("follow", FollowSchema);
export default follow_model;