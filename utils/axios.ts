import axios from "axios";
const tmdbApiKey = process.env.tmdbApiKey;
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: { "Content-Type": "application/json" },
    params: {"api_key": tmdbApiKey}
});
   
export default instance;