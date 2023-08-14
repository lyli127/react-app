import bcrypt from "bcrypt";

import pool from "../pool.js";

async function getLogin(req, res) {
  console.log("Got a /login request. req.session:", req.session);
  if (req.session.user) {
    res.json({ loggedIn: true, email: req.session.user.email });
    console.log("Logged in as: ", req.session.user.email);
  } else {
    res.json({ loggedIn: false });
  }
}

// Router.route("/login").get(async (req, res) => {
//   console.log("Testing login route. req:", req);
//   if (req.session.user) {
//     res.json({ loggedIn: true, email: req.session.user.email });
//     console.log("Logged in as: ", req.session.user.email);
//   } else {
//     res.json({ loggedIn: false });
//   }
// });

async function postLogin(req, res) {
  const potentialLogin = await pool.query(
    "SELECT id, email, password_hash FROM users u WHERE u.email = $1",
    [req.body.email]
  );

  if (potentialLogin > 0) {
    const isPassValid = await bcrypt.compare(
      req.body.password,
      potentialLogin.rows[0].password
    );

    if (isPassValid) {
      console.info("We have a valid password match!");
      //LOGIN
      req.session.user = {
        email: req.body.email,
        id: potentialLogin.rows[0].id,
      };
      res.json({ loggedIn: true, email: req.body.email });
    } else {
      // NOT LOGGED IN
      res.json({ loggedIn: false, message: "Incorrect email or password" });
    }
  } else {
    // EITHER 0 or >1 users found with matching email 🥴
    res.json({ loggedIn: false, message: "Incorrect email or password" });
  }
}

//   .post(async (req, res) => {
//     // validateForm(req, res);

//     const potentialLogin = await pool.query(
//       "SELECT id, email, password FROM users u WHERE u.email = $1",
//       [req.body.email]
//     );

//     if (potentialLogin > 0) {
//       const isPassValid = await bcrypt.compare(
//         req.body.password,
//         potentialLogin.rows[0].password
//       );
//       if (isPassValid) {
//         //LOGIN
//         req.session.user = {
//           email: req.body.email,
//           id: potentialLogin.rows[0].id,
//         };
//         res.json({ loggedIn: true, email: req.body.email });
//       } else {
//         //not logged in
//         res.json({ loggedIn: false, message: "Incorrect email or password" });
//       }
//     } else {
//       res.json({ loggedIn: false, message: "Incorrect email or password" });
//     }
//   });

async function postSignup(req, res) {
  const isNotExistingUser =
    (await pool.query("SELECT email FROM users WHERE email = $1", [
      req.body.email,
    ]).rowCount) === 0;

  if (isNotExistingUser) {
    // Not existing user. Sign the user up.
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING email",
      [req.body.name, req.body.email, hashedPassword]
    );

    req.session.user = {
      // should line below be -> req.body.email?
      email: newUser.rows[0].email,
      id: newUser.rows[0].id,
    };

    res.json({ loggedIn: true, email: req.body.email });
  } else {
    // Is an existing user
    res.json({ loggedIn: false, message: "User already exists" });
  }
}

// Router.post("/signup", async (req, res) => {
//   // validateForm(req, res);

//   const existingUser = await pool.query(
//     "SELECT email FROM users WHERE email = $1",
//     [req.body.email]
//   );

//   if (existingUser.rowCount === 0) {
//     //perform signup
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     const newUser = await pool.query(
//       "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING email",
//       [req.body.name, req.body.email, hashedPassword]
//     );
//     req.session.user = {
//       // should line below be -> req.body.email?
//       email: newUser.rows[0].email,
//       id: newUser.rows[0].id,
//     };
//     res.json({ loggedIn: true, email: req.body.email });
//   } else {
//     res.json({ loggedIn: false, message: "User already exists" });
//   }
// });

export default {
  getLogin,
  postLogin,
  postSignup,
};
