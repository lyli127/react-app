export const BASE_API_URL =
  import.meta.env.MODE === "production"
    ? "https://api.ramen-app.lyli.dev"
    : "http://localhost:3000";
