import mongoose from "mongoose";
import CriticReviewSchema from "./critic_review_schema.js";
const criticReviewModel = mongoose.model("criticReviews", CriticReviewSchema);
export default criticReviewModel;