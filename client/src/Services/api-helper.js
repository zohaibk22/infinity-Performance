import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? /* link to your heroku app. Example:*/ "https://infinity-auto-api.herokuapp.com/"
    : "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
