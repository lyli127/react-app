import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import User from "./controllers/usersController.js";
import RamenReview from "./controllers/ramenController.js";
import Session from "./controllers/sessionController.js";
import "dotenv/config";

const app = express();
const Router = express.Router();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:5173"],
  credentials: true,
};

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
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
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
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
app.get("/api/login", Session.getLogin);
app.post("/api/login", Session.postLogin);

//LOGOUT

//SIGNUP
app.post("/signup", Session.postSignup);

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
