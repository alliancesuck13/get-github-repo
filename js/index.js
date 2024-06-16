import { debounce } from "./debounce.js";
import { renderRepositoryCard } from "./renderRepositoryCard.js";
import { searchInput, autocompliteBox, autocompliteList, cardList } from "./vars.js";
import { searchRepository } from "./searchRepository.js";

searchInput.oninput = debounce(searchRepository, 400);

autocompliteBox.onclick = (evt) => {
  evt.stopPropagation();

  if (evt.target.tagName != "LI") return;

  renderRepositoryCard(evt.target.dataset);

  autocompliteList.innerHTML = "";
  searchInput.value = "";
};

cardList.onclick = (evt) => {
  if (evt.target.className !== "remove-button") return;
  cardList.removeChild(evt.target.parentNode);
};

searchInput.onclick = (evt) => evt.stopPropagation();

document.body.onclick = (evt) => {
  autocompliteList.innerHTML = "";
};

document.body.onload = () => (searchInput.value = "");