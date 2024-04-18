import ReviewModel from "./review_model.js";

export const createReview = (review) => ReviewModel.create(review);

export const findAllReviews = () => ReviewModel.find();

export const findReviewById = (reviewId) => ReviewModel.findById(reviewId);

export const findReviewsByMovieId = (movieId) => ReviewModel.find({ movieId });

export const findReviewsByUserId = (userId) => ReviewModel.find({ userId });

export const updateReview = (reviewId, review) =>
  ReviewModel.updateOne({ _id: reviewId }, { $set: review });

export const deleteReview = (reviewId) => ReviewModel.deleteOne({ _id: reviewId });
