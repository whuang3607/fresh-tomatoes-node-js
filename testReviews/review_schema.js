import mongoose from "mongoose";

const TestReviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    movieId: {
      type: String,
      ref: "test_movies",
      required: true,
      localField: "movieId",
      foreignField: "id",
    },
    rating: { type: Number, required: true },
    comment: String,
  },
  { collection: "reviews" }
);

export default TestReviewSchema;
