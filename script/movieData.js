import { apiKey } from "./apiKey.js";

export let movieData = fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", apiKey)
  .then((response) => response.json())
  .then((data) => data.results);