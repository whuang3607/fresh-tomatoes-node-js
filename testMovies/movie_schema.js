import mongoose from "mongoose";

const testMovieSchema = new mongoose.Schema(
  {
    id: { type: String, requires: true },
    title: { type: String, required: true },
    description: { type: String },
    actors: { type: Array },
    rating: { type: Number },
    primary_image: { type: Object },
  },
  { collection: "test_movies" }
);

export default testMovieSchema;
