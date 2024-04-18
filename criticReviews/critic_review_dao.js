import criticReviewModel from "./critic_review_model.js";

export const createCriticReview = (review) => criticReviewModel.create(review);

export const findAllCriticReviews = () => criticReviewModel.find();

export const findCriticReviewById = (reviewId) => criticReviewModel.findById(reviewId);

export const findCriticReviewsByMovieId = (movieId) => criticReviewModel.find({ movieId });

export const findCriticReviewsByUserId = (userId) => criticReviewModel.find({ userId });

export const updateCriticReview = (reviewId, review) =>
criticReviewModel.updateOne({ _id: reviewId }, { $set: review });

export const deleteCriticReview = (reviewId) => criticReviewModel.deleteOne({ _id: reviewId });
