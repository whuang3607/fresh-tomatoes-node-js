import testMovies from './movie_model.js';

export const findMovieById = (movieId) => testMovies.findOne({ id: movieId });
export const createMovie = (movie) => testMovies.create(movie);
