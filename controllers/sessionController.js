//delete this maybe
import bcrypt from "bcrypt";
import User from "../models/user.js";

//function to verify if user is logged in
const isLoggedIn = async (req, res, next) => {
  try {
    if (req.session.loggedIn) {
      //proceeds to the next middleware or route handler
      next();
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.log(error);
  }
};
