const Card = (element) => {
    const { overview, original_title, release_date, vote_average, poster_path, id } = element;
  
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
    let voteAverageText = document.createTextNode(`평점 : ${vote_average.toFixed(1)} / 10`);
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
  
    cardDiv.addEventListener("click", () => alert(`영화 id : ${id}`));
  
    document.querySelector(".cardContainer").append(cardDiv);
  };

  export const renderCard = async (movieData) => {
    ([...(await movieData)]).forEach((el) => {
      return Card(el);
    });
  };