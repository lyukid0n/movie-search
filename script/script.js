import SearchComponent from "./Components/Search.js";
import CardComponent from "./Components/Card.js";

import { renderer } from "./utils.js";

Array.prototype.mapStr = function (callback) {
  const O = Object(this);
  const mappedArray = O.map(callback);
  return mappedArray.join("");
};

document.addEventListener("DOMContentLoaded", () => {
  renderer(SearchComponent());
  renderer(CardComponent());
});
