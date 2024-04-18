import WatchlistModel from "./watchlist_model.js";

export const createWatchlist = (watchlist) => WatchlistModel.create(watchlist);

export const findWatchlistByUserID = (userId) => WatchlistModel.find({ userId });

export const updateWatchlist = (watchlistId, watchlist) =>
  WatchlistModel.updateOne({ _id: watchlistId }, { $set: watchlist });

export const deleteWatchlist = (watchlistId) => WatchlistModel.deleteOne({ _id: watchlistId });
