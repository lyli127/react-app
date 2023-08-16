import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import RamenReview from "./controllers/ramenController.js";

import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173"],
  credentials: true,
};

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

//RAMEN REVIEW
// GET
app.get("/api/review/:id", RamenReview.getRamenReviewById);
// app.get("/api/review/:user_id/all", RamenReview.getAllRamenReviewsByUser);
app.get(
  "/api/:restaurant_name/reviews",
  RamenReview.getRamenReviewByRestaurant
);
app.get("/api/reviews/all", RamenReview.getAllRamenReviews);
// POST
app.post("/api/review", RamenReview.createRamenReview);

// DELETE
// app.delete("/api/review/:id", RamenReview.deleteRamenReview);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
