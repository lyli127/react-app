import "dotenv/config";
import pool from "../pool.js";

const getAllInfoFromRest = async (request, response) => {
  try {
    const dbResp = await pool.query(
      "SELECT * FROM restaurants WHERE slug = $1",
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
    const dbResp = await pool.query(
      "SELECT * FROM restaurants ORDER BY name ASC"
    );
    return response.json(dbResp.rows);
  } catch (error) {
    console.error(error.message);
  }
};

export default { getAllRestaurants, getAllInfoFromRest };
