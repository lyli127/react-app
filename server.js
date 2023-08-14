import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import User from "./controllers/usersController.js";
import RamenReview from "./controllers/ramenController.js";

const app = express();
const PORT = process.env.PORT || 3000;
