import Movie from "./movie_model.js";

export const createMovie = (titles) => {
  console.log("titles", titles);
  const createdMovies = [];

  for (const title of titles) {
    const existingMovie = Movie.findOne({ title });

    if (!existingMovie) {
      const newMovie = Movie.create({ title });
      createdMovies.push(newMovie);
    } else {
      console.log(`Movie with title '${title}' already exists. Skipping.`);
    }
  }
  return createdMovies;
};

export const createMovieByAdmin = (movie) => {
    // console.log("movie", movie);
    const createdMovies = [];
  
      const newMovie = Movie.create(movie);
      createdMovies.push(newMovie);
  
    return createdMovies;
  };

export const findAllMovies = () => Movie.find();
export const findMovieById = (movieId) => Movie.findById(movieId);
export const updateMovie = (movieId, movie) =>
  Movie.updateOne({ _id: movieId }, { $set: movie });
export const deleteMovie = (movieId) => Movie.deleteOne({ _id: movieId });

export const getMovieTitle = (movieTitle) =>
  Movie.findOne({ title: movieTitle });
