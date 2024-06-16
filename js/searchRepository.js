import { wrapper, autocompliteList } from './vars.js';
import { renderNothingFound } from './renderNothingFound.js';

export async function searchRepository (evt) {

  if (!evt.target.value || evt.target.value.includes(' ')) {
    autocompliteList.innerHTML = "";
    wrapper.innerHTML = "";
    return;
  }

  try {
    let repositories = [];
    repositories.length = 5;
    
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${evt.target.value}`
      );
    const result = await response.json();
    
    if (!result.total_count) {
      wrapper.innerHTML = "";
      renderNothingFound();
    } else {
      wrapper.innerHTML = "";
    }

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
}