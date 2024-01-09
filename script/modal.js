// const modal = (element) => {
//   document.querySelector(".modalContainer").replaceChildren();
//   const { original_title, overview, poster_path, popularity } = element;
//   let modalDiv = document.createElement("div");
//   modalDiv.setAttribute("class", "modal");
//   let imageDiv = document.createElement("div");
//   imageDiv.setAttribute("class", "modal_image");
//   let image = document.createElement("img");
//   image.setAttribute("src", `https://image.tmdb.org/t/p/w300${poster_path}`);
//   let titleDiv = document.createElement("div");
//   titleDiv.setAttribute("class", "modal_title");
//   let titleText = document.createTextNode(original_title);
//   titleDiv.appendChild(titleText);
//   let overviewDiv = document.createElement("div");
//   overviewDiv.setAttribute("class", "modal_overview");
//   let overviewText = document.createTextNode(overview);
//   overviewDiv.appendChild(overviewText);
//   let popularityDiv = document.createElement("div");
//   popularityDiv.setAttribute("class", "modal_popularity");
//   let popularityText = document.createTextNode(parseInt(popularity) + "%");
//   popularityDiv.appendChild(popularityText);
//   imageDiv.appendChild(image);
//   modalDiv.appendChild(imageDiv);
//   modalDiv.appendChild(titleDiv);
//   modalDiv.appendChild(popularityDiv);
//   modalDiv.appendChild(overviewDiv);

//   document.querySelector(".modalContainer").append(modalDiv);
//   document.querySelector(".modalContainer").style.display = "flex";
//   document.querySelector(".modalContainer").addEventListener("click", () => {
//     document.querySelector(".modalContainer").replaceChildren();
//     document.querySelector(".modalContainer").style.display = "none";
//   });
// };
