import mongoose from "mongoose";
import testMovieSchema from "./movie_schema.js";

const Movie = mongoose.model("testMovies", testMovieSchema);
export default Movie;