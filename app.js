import express from "express";
import bodyParser from "body-parser";
import User from "./controllers/usersController.js";
import RamenReview from "./controllers/ramenController.js";

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  // response.send("Welcome to Ramen App!");
  response.json({
    info: "This is the json response",
    message: "Welcome to Ramen App!",
  });
});
// response.status(200);
// });

/*
Should I use the complete route, eg.: /users/:id/delete or just /users/:id?
How can I test these routes?
Have I missed anything?
*/

//USERS
app.get("/users/:id", User.getUserById);
app.post("/users", User.createUser);
app.put("/users/:id", User.updateUser);
app.delete("/users/:id", User.deleteUser);
