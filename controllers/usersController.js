import "dotenv/config";
import PG from "pg";
import bcrypt from "bcrypt";

import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CERT_PATH = path.join(__dirname, "../certs/aws-rds-global-bundle.pem");


// Create new user
const createUser = (request, response) => {
  const { name, email, password } = request.body;
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
        response.status(201).send(`User added with ID: ${results.rows[0].id}`);
      }
    );
  });
};

//Get user by id
const getUserById = (request, response) => {
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

