import "dotenv/config";
import slugify from "slugify";
import pool from "../pool.js";

//Create new ramen review
const createRamenReview = async (request, response) => {
  try {
    let restaurantId;

    // Step 1: Try to get the restaurant id via its slug.
    restaurantId = (
      await pool.query("SELECT id FROM restaurants WHERE slug = $1", [
        slugify(request.body.restaurant_name),
      ])
    ).rows[0]?.id;

    // Step 2: If restaurant doesn't exist, create new restaurant in restaurants table and get the id.
    // Note: This will set the Restaurant name/slug to whatever the user has entered. We're getting it
    //       later via a loose `ILIKE '%$1%'` query... so buyer beware.
    if (!restaurantId) {
      restaurantId = (
        await pool.query(
          "INSERT INTO restaurants (name, slug) VALUES ($1, $2) RETURNING id",
          [
            request.body.restaurant_name,
            slugify(request.body.restaurant_name).toLowerCase(),
          ]
        )
      ).rows[0]?.id;
    }

    // Step 3: Insert new ramen review into review table.
    const {
      // restaurant_name,
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
    } = request.body;

    const dbResp = await pool.query(
      "INSERT INTO reviews (restaurant_id, dish_name, photo_url, ramen_type,ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *",
      [
        restaurantId,
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
      ]
    );

    return response
      .status(201)
      .json(`Ramen review added with ID: ${dbResp.rows[0]?.id}`);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error);
  }
};

//Read ramen review by id
const getRamenReviewById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query("SELECT * FROM ramen WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows[0]);
    // console.log(results.rows[0]);
  });
};

//Read ramen review by restaurant id/name
const getRamenReviewByRestaurant = (request, response) => {
  const restaurantName = request.params.restaurant_name;

  pool.query(
    `SELECT
      reviews.id,
      reviews.dish_name,
      restaurants.name as restaurant_name,
      restaurants.slug as restaurant_slug,
      reviews.photo_url,
      reviews.ramen_type,
      reviews.ramen_score,
      reviews.noodle_texture,
      reviews.noodle_score,
      reviews.broth_type,
      reviews.broth_score,
      reviews.chashu_type,
      reviews.chashu_score,
      reviews.ajitama,
      reviews.ajitama_score,
      reviews.other_notes,
      reviews.date_visited
    FROM reviews
    JOIN restaurants ON reviews.restaurant_id = restaurants.id
    WHERE restaurants.slug ILIKE $1`,
    [`%${slugify(restaurantName)}%`],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
      console.log(results.rows);
    }
  );
};

//get ALL reviews
const getAllRamenReviews = (request, response) => {
  pool.query(
    "SELECT * FROM ramen ORDER BY id DESC",
    [restaurantName],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
      console.log(results.rows);
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

//create api to get all restaurant names for autocomplete feature

export default {
  createRamenReview,
  getRamenReviewByRestaurant,
  getAllRamenReviews,
  getRamenReviewById,
  deleteRamenReview,
};
