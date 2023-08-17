import "dotenv/config";
import slugify from "slugify";
import pool from "../pool.js";

//Get Lat/Long from database for Google Maps
const getLatLong = async (request, response) => {
  try {
    const dbResp = await pool.query(
      "SELECT latitude, longitude FROM restaurants WHERE slug = $1",
      [request.params.slug]
    );
    return response.json(dbResp.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};

//get all restaurant info
const getAllRestaurants = async (request, response) => {
  try {
    const dbResp = await pool.query("SELECT * FROM restaurants");
    return response.json(dbResp.rows);
  } catch (error) {
    console.error(error.message);
  }
};

export default { getLatLong, getAllRestaurants };
