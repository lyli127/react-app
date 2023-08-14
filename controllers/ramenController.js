import "dotenv/config";
import PG from "pg";

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

//Create new ramen review
const createRamenReview = (request, response) => {
  const {
    restaurant_name,
    dish_name,
    photo_url,
    ramen_type,
    ramen_score,
    noodle_texture,
    noodle_score,
    broth_type,
    broth_score,
    chashu_type,
    chashu_score,
    ajitama,
    ajitama_score,
    other_notes,
    date_visited,
    user_id,
  } = request.body;
  pool.query(
    "INSERT INTO ramen (restaurant_name, dish_name, photo_url, ramen_type,ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *",
    [
      restaurant_name,
      dish_name,
      photo_url,
      ramen_type,
      ramen_score,
      noodle_texture,
      noodle_score,
      broth_type,
      broth_score,
      chashu_type,
      chashu_score,
      ajitama,
      ajitama_score,
      other_notes,
      date_visited,
      user_id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .send(`Ramen review added with ID: ${results.rows[0].id}`);
    }
  );
};

//Read all ramen review
const getAllRamenReviews = (request, response) => {
  pool.query(
    "SELECT * FROM ramen WHERE user_id= $1 ORDER BY id DESC",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//Read ramen review by id
const getRamenReviewById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM ramen WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    // console.log(results.rows[0]);
  });
};

//Read ramen review by restaurant id/name
const getRamenReviewByRestaurant = (request, response) => {
  const restaurantName = request.params.restaurant_name;
  pool.query(
    "SELECT * FROM ramen WHERE restaurant_name = $1",
    [restaurantName],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows[0]);
      // console.log(results.rows[0]);
    }
  );
};

//Update ramen review
const updateRamenReview = (request, response) => {
  const id = parseInt(request.params.id);
  const {
    restaurant_name,
    dish_name,
    photo_url,
    ramen_type,
    ramen_score,
    noodle_texture,
    noodle_score,
    broth_type,
    broth_score,
    chashu_type,
    chashu_score,
    ajitama,
    ajitama_score,
    other_notes,
    date_visited,
    user_id,
  } = request.body;
  pool.query(
    "UPDATE ramen SET restaurant_name=$1, dish_name=$2, photo_url=$3, ramen_type=$4, ramen_score=$5, noodle_texture=$6, noodle_score=$7, broth_type=$8, broth_score=$9, chashu_type=$10, chashu_score=$11, ajitama=$12, ajitama_score=$13, other_notes=$14, date_visited=$15, user_id=$16 WHERE id=$17",
    [
      restaurant_name,
      dish_name,
      photo_url,
      ramen_type,
      ramen_score,
      noodle_texture,
      noodle_score,
      broth_type,
      broth_score,
      chashu_type,
      chashu_score,
      ajitama,
      ajitama_score,
      other_notes,
      date_visited,
      user_id,
      id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(`Ramen review modified with ID: ${id}`);
    }
  );
};

//Delete ramen review
const deleteRamenReview = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM ramen WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Ramen review deleted with ID: ${id}`);
  });
};

export default {
  createRamenReview,
  getAllRamenReviews,
  getRamenReviewById,
  updateRamenReview,
  deleteRamenReview,
};
