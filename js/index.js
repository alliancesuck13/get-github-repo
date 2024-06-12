import { debounce } from "./debounce.js";
import { renderRepositoryCard } from "./renderRepositoryCard.js";
import { searchInput, autocompliteBox, autocompliteList, cardList } from "./vars.js";

searchInput.oninput = debounce(async (evt) => {
  if (!evt.target.value) {
    autocompliteList.innerHTML = "";
    return;
  }

  try {
    let repositories = [];
    repositories.length = 5;
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${evt.target.value}`
      );
    const result = await response.json();

    if (!evt.target.value) {
      autocompliteList.innerHTML = "";
    }

    for (let i = 0; i < 5; i++) {
      repositories.shift();
      if (result.items[i]) {
        repositories.push(result.items[i]);
      }
    }

    autocompliteList.innerHTML = "";
    repositories.forEach((item) => {
      const li = document.createElement("li");

      li.classList.add("autocomplite__item");
      li.innerText = item.name;

      li.dataset.name = item.name;
      li.dataset.owner = item.owner.login;
      li.dataset.stars = item.stargazers_count;

      autocompliteList.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
}, 400);

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