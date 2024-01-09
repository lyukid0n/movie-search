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
  document.querySelector(".modalContainer").replaceChildren();
  const { original_title, overview, poster_path, popularity } = element;
  let modalDiv = document.createElement("div");
  modalDiv.setAttribute("class", "modal");
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
  overviewDiv.appendChild(overviewText);
  let popularityDiv = document.createElement("div");
  popularityDiv.setAttribute("class", "modal_popularity");
  let popularityText = document.createTextNode(parseInt(popularity) + "%");
  popularityDiv.appendChild(popularityText);
  imageDiv.appendChild(image);
  modalDiv.appendChild(imageDiv);
  modalDiv.appendChild(titleDiv);
  modalDiv.appendChild(popularityDiv);
  modalDiv.appendChild(overviewDiv);

  document.querySelector(".modalContainer").append(modalDiv);
  document.querySelector(".modalContainer").style.display = "flex";
  document.querySelector(".modalContainer").addEventListener("click", () => {
    document.querySelector(".modalContainer").replaceChildren();
    document.querySelector(".modalContainer").style.display = "none";
  });
};

const Card = (element) => {
  const { overview, original_title, release_date, vote_average, poster_path } = element;

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
  let voteAverageDiv = document.createElement("div");
  voteAverageDiv.setAttribute("class", "voteAverage");
  let voteAverageText = document.createTextNode(vote_average);
  voteAverageDiv.append(voteAverageText);
  let overviewDiv = document.createElement("div");
  overviewDiv.setAttribute("class", "overview");
  let overviewText = document.createTextNode(overview);
  overviewDiv.append(overviewText);
  imageDiv.appendChild(image);
  cardDiv.appendChild(imageDiv);
  cardDiv.appendChild(titleDiv);
  cardDiv.appendChild(releaseDateDiv);
  cardDiv.appendChild(voteAverageDiv);
  cardDiv.appendChild(overviewDiv)

  cardDiv.addEventListener("click", () => modal(element));

  document.querySelector(".cardContainer").append(cardDiv);
};

const render = async () => {
  [...(await movieData)].forEach((el) => {
    return Card(el);
  });
};

render();

document.querySelector(".searchContainer").addEventListener("submit", async (e) => {
  e.preventDefault();
  let newData = (await movieData).filter((data) => {
    const { original_title } = data;
    const { value } = document.querySelector("input");
    // 공백 시 전체 카드
    if (value === "") {
      return true;
    }

    for (let i = 0; i < original_title.length - value.length + 1; i++) {
      let check = true;
      for (let j = 0; j < value.length; j++) {
        if (original_title[i + j] !== value[j]) {
          check = false;
          break;
        }
      }
      if (check) {
        return true;
      }
    }
  });
  document.querySelector(".cardContainer").replaceChildren();
  renderCard(newData);
});
