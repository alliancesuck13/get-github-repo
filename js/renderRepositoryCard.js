import { cardList } from "./vars.js";

export function renderRepositoryCard(dataset) {
  const listItem = document.createElement("li");
  listItem.classList.add("list__item");
  cardList.appendChild(listItem);

  const repositoryInfo = document.createElement("div");
  repositoryInfo.classList.add("repository-info");
  listItem.appendChild(repositoryInfo);

  const repositoryName = document.createElement("p");
  repositoryName.classList.add("repository-name");
  repositoryName.innerHTML = `<b>Name:</b> ${dataset.name}`;
  repositoryInfo.appendChild(repositoryName);

  const repositoryOwner = document.createElement("p");
  repositoryOwner.classList.add("repository-owner");
  repositoryOwner.innerHTML = `<b>Owner:</b> ${dataset.owner}`;
  repositoryInfo.appendChild(repositoryOwner);

  const repositoryStars = document.createElement("p");
  repositoryStars.classList.add("repository-stars");
  repositoryStars.innerHTML = `<b>Stars:</b> ${dataset.stars}`;
  repositoryInfo.appendChild(repositoryStars);

  const removeButton = document.createElement("div");
  removeButton.classList.add("remove-button");
  listItem.appendChild(removeButton);
}
