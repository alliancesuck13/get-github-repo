import { wrapper } from "./vars.js";

export function renderNothingFound() {
  let pNothingFound = document.createElement("p");
  pNothingFound.innerHTML = "<i>Nothing found</i>";
  pNothingFound.classList.add("nothing-found");
  wrapper.appendChild(pNothingFound);
}
