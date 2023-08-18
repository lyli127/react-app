import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Review from "./controllers/ramenController.js";
import Restaurant from "./controllers/restaurantController.js";

import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

let BASE_URL_FRONTEND;
let BASE_URL_BACKEND;

if (process.env.NODE_ENV === "production") {
  BASE_URL_FRONTEND = "https://ramen-app.lyli.dev";
  BASE_URL_BACKEND = "https://api.ramen-app.lyli.dev";
} else {
  BASE_URL_FRONTEND = "http://localhost:5173";
  BASE_URL_BACKEND = "http://localhost:3000";
}

const corsOptions = {
  origin: [BASE_URL_BACKEND, BASE_URL_FRONTEND],
  credentials: true,
};

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

//RAMEN REVIEW
// GET
app.get("/api/reviews/all", Review.getAllRamenReviews);
app.get("/api/reviews/:restaurant_name", Review.getRamenReviewByRestaurant);
app.get("/api/review/:id", Review.getRamenReviewById);
// POST
app.post("/api/review", Review.createRamenReview);

// DELETE
// app.delete("/api/review/:id", RamenReview.deleteRamenReview);

//RESTAURANT
// GET
app.get("/api/restaurant/:slug", Restaurant.getAllInfoFromRest);
app.get("/api/restaurants/all", Restaurant.getAllRestaurants);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
