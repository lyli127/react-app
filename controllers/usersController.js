import "dotenv/config";
import PG from "pg";
import bcrypt from "bcrypt";

import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CERT_PATH = path.join(__dirname, "../certs/aws-rds-global-bundle.pem");

const pool = new PG.Pool({
  ssl: {
    rejectUnauthorized: true,
    // https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem
    ca: fs.readFileSync(CERT_PATH),
  },
});

// Create new user
const createUser = (request, response) => {
  const { name, email, password } = request.body;
  console.log("request.body", request.body);
  // source: https://heynode.com/blog/2020-04/salt-and-hash-passwords-bcrypt/ - salting and hashing at the same time
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      throw err;
    }
    pool.query(
      "INSERT INTO users (first_name, email, password_hash) VALUES ($1, $2, $3) RETURNING *",
      [name, email, hash],
      (error, results) => {
        if (error) {
          throw error;
        }
        // response.status(201).json(`User added with ID: ${results.rows[0].id}`);
        response.status(201).json({ status: "", loggedIn: true });
      }
    );
  });
};

//Get user by id
const getUserById = (request, response) => {
  console.log("request.params", request.params);
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// Update user
const updateUser = (request, response) => {
  //  consider just all the data from the request.body,
  // instead of spreading it over params and body
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    "UPDATE users SET first_name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(200)
        .send(
          `User modified with ID: ${id}, Name: {first_name}, Email: {email}`
        );
    }
  );
};

//Delete user account
const deleteUser = (request, response) => {
  // delete would normally be from the body, not the params
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User account deleted with ID: ${id}`);
  });
};

export default { createUser, getUserById, updateUser, deleteUser };
