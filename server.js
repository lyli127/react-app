import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import User from "./controllers/usersController.js";
import RamenReview from "./controllers/ramenController.js";

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//USERS
// GET
app.get("/api/users/:id", User.getUserById);
// POST
app.post("/api/users", User.createUser);
// PUT
app.put("/api/users/:id", User.updateUser);
// DELETE
app.delete("/api/users/:id", User.deleteUser);
