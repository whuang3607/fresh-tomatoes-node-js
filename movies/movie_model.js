import mongoose from "mongoose";
import movieSchema from "./movie_schema.js";

const Movie = mongoose.model("movies", movieSchema);
export default Movie;