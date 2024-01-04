Array.prototype.mapStr = function (callback) {
  const O = Object(this);
  const mappedArray = O.map(callback);
  return mappedArray.join("");
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmEzYjYwMTg5Mjc3NjliMDFkMjQ0MzExNzlmZTcyNSIsInN1YiI6IjY1OGUxOTQ5ZWEzN2UwMTljZTc0N2EwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6FU9xe6iFSloZVTTf0OBTX-lRD1jgNk6uvH-hfjeLP4",
  },
};

let movieData = fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
  .then((response) => response.json())
  .then((data) => data.results);

const modal = (element) => {
  console.log('hi')
  document.querySelector(".modalContainer").replaceChildren();
  const { original_title, overview, poster_path, popularity } = element
  let modalDiv = document.createElement("div");
  modalDiv.setAttribute('class', "modal")
  let imageDiv = document.createElement("div");
  imageDiv.setAttribute("class", "modal_image");
  let image = document.createElement("img");
  image.setAttribute("src", `https://image.tmdb.org/t/p/w300${poster_path}`);
  let titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "modal_title");
  let titleText = document.createTextNode(original_title);
  titleDiv.appendChild(titleText);
  let overviewDiv = document.createElement("div");
  overviewDiv.setAttribute("class", "modal_overview");
  let overviewText = document.createTextNode(overview);
  overviewDiv.appendChild(overviewText)
  let popularityDiv = document.createElement("div");
  popularityDiv.setAttribute("class", "modal_popularity");
  let popularityText = document.createTextNode(parseInt(popularity)+"%");
  popularityDiv.appendChild(popularityText)
  imageDiv.appendChild(image);
  modalDiv.appendChild(imageDiv);
  modalDiv.appendChild(titleDiv);
  modalDiv.appendChild(popularityDiv);
  modalDiv.appendChild(overviewDiv);

  document.querySelector(".modalContainer").append(modalDiv);
  document.querySelector(".modalContainer").style.display = 'flex'
  document.querySelector(".modalContainer").addEventListener("click", () => {
    document.querySelector(".modalContainer").replaceChildren();
    document.querySelector(".modalContainer").style.display = 'none'
  })
};

const Card = (element) => {
  const { adult, original_title, release_date, overview, backdrop_path, poster_path } = element;

  let cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");
  let imageDiv = document.createElement("div");
  imageDiv.setAttribute("class", "image");
  let image = document.createElement("img");
  image.setAttribute("src", `https://image.tmdb.org/t/p/w300${poster_path}`);
  let titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");
  let titleText = document.createTextNode(original_title);
  titleDiv.appendChild(titleText);
  let releaseDateDiv = document.createElement("div");
  releaseDateDiv.setAttribute("class", "release_date");
  let releaseDateText = document.createTextNode(release_date);
  releaseDateDiv.appendChild(releaseDateText);
  let adultDiv = document.createElement("div");
  adultDiv.setAttribute("class", "adult");
  let adultText = document.createTextNode(`${adult ? "adult" : "everyone"}`);
  adultDiv.append(adultText);
  imageDiv.appendChild(image);
  cardDiv.appendChild(imageDiv);
  cardDiv.appendChild(titleDiv);
  cardDiv.appendChild(releaseDateDiv);
  cardDiv.appendChild(adultDiv);

  cardDiv.addEventListener("click", () => modal(element));

  document.querySelector(".cardContainer").append(cardDiv);
};

const renderCard = (array) => {
  console.log(array);
  array.forEach((el) => {
    return Card(el);
  });
};

const render = async () => {
  renderCard(await movieData);
};

render();

document.querySelector(".searchContainer").addEventListener("submit", async (e) => {
  e.preventDefault();
  let newData = (await movieData).filter((data) => {
    const { original_title } = data;
    const { value } = document.querySelector("input");
    return value
      .split("")
      .every((str, idx) => str.toLowerCase() === original_title[idx].toLowerCase());
  });
  document.querySelector(".cardContainer").replaceChildren();
  renderCard(newData);
});
