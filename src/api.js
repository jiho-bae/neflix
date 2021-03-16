import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "f2f15f6d8fab4331b35b055c29c0e51a",
    language: "en-US",
  },
});

api.get("tv/popular");
