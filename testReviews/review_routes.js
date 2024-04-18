import * as reviewDao from "./review_dao.js";

function TestReviewRoutes(app) {

  const findReviewsByMovieId = async (req, res) => {
    const reviews = await reviewDao.findReviewsByMovieId(req.params.movieId);
    res.json(reviews);
  };

  app.get("/api/testReviews/movie/:movieId", findReviewsByMovieId);
}

export default TestReviewRoutes;
