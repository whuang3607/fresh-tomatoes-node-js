import * as movieDao from "./movie_dao.js";

function MovieRoutes(app) {
    const createMovieByAdmin = async (req, res) => {
        const addedMovie = req.body;
        const existingMovie = await movieDao.getMovieTitle(addedMovie.title);
        console.log("movie title ", addedMovie.title);
    
    
        console.log("titles body", addedMovie)
        if (!existingMovie) {
            const movie = await movieDao.createMovieByAdmin(addedMovie);
            res.json(movie);
        }
      };
    
  const createMovie = async (req, res) => {
    const titles = req.body.titles;
    console.log("titles body", titles)
    const movie = await movieDao.createMovie(titles);
    res.json(movie);
  };

  const deleteMovie = async (req, res) => {
    const status = await movieDao.deleteMovie(req.params.movieId);
    res.json(status);
  };

  const findAllMovies = async (req, res) => {
    const movies = await movieDao.findAllMovies();
    res.json(movies);
  };

  const findMovieById = async (req, res) => {
    const movie = await movieDao.findMovieById(req.params.movieId);
    res.json(movie);
  };

  const updateMovie = async (req, res) => {
    const { movieId } = req.params;
    const status = await movieDao.updateMovie(movieId, req.body);
    res.json(status);
  };

  const getMovieTitle = async(req, res) => {
    const { movieTitle } = req.params;
  try {
    const movie = await movieDao.getMovieTitle(movieTitle);
    if (movie) {
      res.json({ movieId: movie._id });
    } else {
      res.status(404).json({ error: "Movie not found" });
    }
  } catch (error) {
    console.error("Error fetching movie ID by title:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
  }

  app.post("/api/movies", createMovie);
  app.get("/api/movies", findAllMovies);
  app.get("/api/movies/:movieId", findMovieById);
  app.put("/api/movies/:movieId", updateMovie);
  app.delete("/api/movies/:movieId", deleteMovie);
  app.get("/api/movie/:movieTitle", getMovieTitle);
}

export default MovieRoutes;
