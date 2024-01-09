import { renderCard } from "./card.js";
import { movieData } from './movieData.js'

export const search = async (e) => {
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
        if (original_title[i + j].toLowerCase() !== value[j].toLowerCase()) {
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
};
