import mongoose from "mongoose";
import TestReviewSchema from "./review_schema.js";
const test_review_model = mongoose.model("test_reviews", TestReviewSchema);
export default test_review_model;