import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import User from "./controllers/usersController.js";
import RamenReview from "./controllers/ramenController.js";
import "dotenv/config";
// import pool from "./pool.js";
// import bcrypt from "bcrypt";

const app = express();
const Router = express.Router();
const PORT = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_KEY,
    credentials: "true",
    name: "sid",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.ENVIRONMENT === "production" ? true : "auto",
      httpOnly: true,
      sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
    },
  })
);

//USERS
// GET
app.get("/api/users/:id", User.getUserById);
// POST
app.post("/api/users", User.createUser);
// PUT
app.put("/api/users/:id", User.updateUser);
// DELETE
app.delete("/api/users/:id", User.deleteUser);

//SESSIONS

//LOGIN

//RAMEN REVIEW
// GET
app.get("/api/review/:id", RamenReview.getRamenReviewById);
app.get("/api/review/:user_id/all", RamenReview.getAllRamenReviewsByUser);
app.get("/api/review/:restaurant_name", RamenReview.getRamenReviewByRestaurant);
// POST
app.post("/api/review", RamenReview.createRamenReview);
// PUT
app.put("/api/review/:id", RamenReview.updateRamenReview);
// DELETE
app.delete("/api/review/:id", RamenReview.deleteRamenReview);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
