import mongoose from 'mongoose';
import movieSchema from '../movies/movie_schema.js';
const watchlistSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    movieId: { type: String, ref: 'movies', required: true },
    // movie: { type: movieSchema, required: true },
    movie: {
      title: { type: String, required: true },
      url: {
        type: String,
        default: 'https://static.thenounproject.com/png/482114-200.png',
      },
    },
    // movie: {type }
  },
  { collection: 'watchlist' }
);

export default watchlistSchema;
