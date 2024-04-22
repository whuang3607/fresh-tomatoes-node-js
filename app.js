import express from 'express';
import Hello from './hello.js';
import cors from 'cors';
import mongoose from 'mongoose';
import UserRoutes from './users/routes.js';
import session from 'express-session';
import ReviewRoutes from './reviews/review_routes.js';
import CriticReviewRoutes from './criticReviews/critic_review_routes.js';
import WatchlistRoutes from './watchlist/watchlist_routes.js';
import 'dotenv/config';
import MovieRoutes from './movies/movie_routes.js';
import testMovieRoutes from './testMovies/movie_routes.js';
import TestReviewRoutes from './testReviews/review_routes.js';

// Vamshika's db
// const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/Kanbas'
//Natasha's db
const CONNECTION_STRING =
  'mongodb+srv://parikhmili9:passwordMilli@cluster0.uywwgu4.mongodb.net/Fresh_Tomatoes?retryWrites=true&w=majority&appName=Cluster0';
// const CONNECTION_STRING = 'mongodb+srv://admin:admin@cluster0.j09aedf.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);
const sessionOptions = {
  secret: 'any string',
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== 'development') {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: 'none',
    secure: true,
  };
}

app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
ReviewRoutes(app);
CriticReviewRoutes(app);
WatchlistRoutes(app);
MovieRoutes(app);
Hello(app);
testMovieRoutes(app);
TestReviewRoutes(app);
app.listen(4000);
