import * as movieDao from './movie_dao.js';

function testMovieRoutes(app) {
  const findMovieById = async (req, res) => {
    const movie = await movieDao.findMovieById(req.params.movieId);
    res.json(movie);
  };
  const createMovie = async (req, res) => {
    const movie = await movieDao.createMovie(req.body);
    res.json(movie);
  };

  app.post('/api/moviesByAdmin', createMovie);
  app.get('/api/testMovies/:movieId', findMovieById);
}

export default testMovieRoutes;
