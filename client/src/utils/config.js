export const BASE_API_URL =
  import.meta.env.MODE === "production"
    ? "https://api.ramen-app.lyli.dev"
    : "http://localhost:3000";

export const GOOGLE_MAP_KEY =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_GOOGLE_MAPS_PROD_KEY
    : import.meta.env.VITE_GOOGLE_MAPS_DEV_KEY;
