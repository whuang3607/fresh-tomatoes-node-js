import * as reviewDao from "./review_dao.js";

function ReviewRoutes(app) {
  const createReview = async (req, res) => {
    const review = await reviewDao.createReview(req.body);
    res.json(review);
  };

  const findAllReviews = async (req, res) => {
    const reviews = await reviewDao.findAllReviews();
    res.json(reviews);
  };

  const findReviewById = async (req, res) => {
    const review = await reviewDao.findReviewById(req.params.reviewId);
    res.json(review);
  };

  const findReviewsByMovieId = async (req, res) => {
    const reviews = await reviewDao.findReviewsByMovieId(req.params.movieId);
    res.json(reviews);
  };

  const findReviewsByUserId = async (req, res) => {
    try {
        console.log(req.params.userId);
        const reviews = await reviewDao
            .findReviewsByUserId(req.params.userId)
            .populate('userId'); 
        console.log(reviews);
        res.json(reviews);
    } catch (error) {
        console.error("Error fetching reviews by user ID", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

  const updateReview = async (req, res) => {
    const { reviewId } = req.params;
    const status = await reviewDao.updateReview(reviewId, req.body);
    res.json(status);
  };

  const deleteReview = async (req, res) => {
    const status = await reviewDao.deleteReview(req.params.reviewId);
    res.json(status);
  };

  app.post("/api/reviews", createReview);
  app.get("/api/reviews", findAllReviews);
  app.get("/api/reviews/:reviewId", findReviewById);
  app.get("/api/reviews/movie/:movieId", findReviewsByMovieId);
  app.get("/api/reviews/user/:userId", findReviewsByUserId);
  app.put("/api/reviews/:reviewId", updateReview);
  app.delete("/api/reviews/:reviewId", deleteReview);
}

export default ReviewRoutes;
