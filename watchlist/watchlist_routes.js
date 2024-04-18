import * as watchlistdoa from "./watchlist_dao.js";
import WatchlistModel from "./watchlist_model.js";
import Movie from "../movies/movie_model.js";
function WatchlistRoutes(app) {
  async function createWatchlist(req, res) {
    try {
      const { userId, movieId } = req.body;
      
      const existingWatchlist = await WatchlistModel.findOne({ userId, movieId });
  
      if (existingWatchlist) {
        res.json({ message: 'Watchlist entry already exists for this user and movie.' });
      } else {
        const movieDetails = await Movie.findById(movieId);
        console.log("movie details", movieDetails)
        const watchlist = await watchlistdoa.createWatchlist({
          userId,
          movieId,
          movie: movieDetails, 
        });
        console.log("watchlist", watchlist);
        res.json(watchlist);
      }
    } catch (error) {
      console.error("Error creating watchlist", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  const findWatchlistByUserID = async (req, res) => {
    try {
      console.log("param id", req.params.userId);
      const watchlist = await WatchlistModel.find({userId: req.params.userId}).populate("movie");;
        
      console.log(watchlist);
      res.json(watchlist);
    } catch (error) {
      console.error("Error fetching watchlist by user ID", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const updateWatchlist = async (req, res) => {
    const { watchlistId } = req.params;
    const status = await watchlistdoa.updateWatchlist(watchlistId, req.body);
    res.json(status);
  };

  const deleteWatchlist = async (req, res) => {
    const status = await watchlistdoa.deleteWatchlist(req.params.watchlistId);
    res.json(status);
  };

  app.post("/api/watchlist", createWatchlist);
  app.get("/api/watchlist/:userId", findWatchlistByUserID);
  app.put("/api/watchlist/:watchlistId", updateWatchlist);
  app.delete("/api/watchlist/:watchlistId", deleteWatchlist);
}

export default WatchlistRoutes;
