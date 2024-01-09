import { renderCard } from "./card.js";
import { search } from "./search.js";
import { movieData } from "./movieData.js";

renderCard(movieData);

document.querySelector(".searchContainer").addEventListener("submit", (e) =>{
  e.preventDefault();
  search(e)
});
