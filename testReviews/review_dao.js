import test_review_model from "./review_model.js";

export const findReviewsByMovieId = (movieId) => test_review_model.find({ movieId });
