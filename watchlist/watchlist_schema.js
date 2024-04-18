import mongoose from "mongoose";
import movieSchema from "../movies/movie_schema.js";
const watchlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: "movies", required: true },
  movie: { type: movieSchema, required: true }
},
{ collection: "watchlist" });

export default watchlistSchema;