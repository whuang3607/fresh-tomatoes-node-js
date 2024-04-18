import mongoose from "mongoose";
import watchlistSchema from "./watchlist_schema.js";
const WatchlistModel = mongoose.model("watchlist", watchlistSchema);
export default WatchlistModel;