import * as criticReviewDao from "./critic_review_dao.js";

function CriticReviewRoutes(app) {
  const createCriticReview = async (req, res) => {
    const review = await criticReviewDao.createCriticReview(req.body);
    res.json(review);
  };

  const findAllCriticReviews = async (req, res) => {
    const reviews = await criticReviewDao.findAllCriticReviews();
    res.json(reviews);
  };

  const findCriticReviewById = async (req, res) => {
    const review = await criticReviewDao.findCriticReviewById(req.params.reviewId);
    res.json(review);
  };

  const findCriticReviewsByMovieId = async (req, res) => {
    const reviews = await criticReviewDao.findCriticReviewsByMovieId(req.params.movieId);
    res.json(reviews);
  };

  const findCriticReviewsByUserId = async (req, res) => {
    try {
        console.log(req.params.userId);
        const reviews = await criticReviewDao
            .findCriticReviewsByUserId(req.params.userId)
            .populate('userId'); 
        console.log(reviews);
        res.json(reviews);
    } catch (error) {
        console.error("Error fetching reviews by user ID", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

  const updateCriticReview = async (req, res) => {
    const { reviewId } = req.params;
    const status = await criticReviewDao.updateCriticReview(reviewId, req.body);
    res.json(status);
  };

  const deleteCriticReview = async (req, res) => {
    const status = await criticReviewDao.deleteCriticReview(req.params.reviewId);
    res.json(status);
  };

  app.post("/api/criticreviews", createCriticReview);
  app.get("/api/criticreviews", findAllCriticReviews);
  app.get("/api/criticreviews/:reviewId", findCriticReviewById);
  app.get("/api/criticreviews/movie/:movieId", findCriticReviewsByMovieId);
  app.get("/api/criticreviews/user/:userId", findCriticReviewsByUserId);
  app.put("/api/criticreviews/:reviewId", updateCriticReview);
  app.delete("/api/criticreviews/:reviewId", deleteCriticReview);
}

export default CriticReviewRoutes;
