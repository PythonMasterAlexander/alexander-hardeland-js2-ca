import { createElement } from '../components/createCardFromApi.js';
import { mainSectionApiContainer } from '../partials/variables.js';

const displayApiErrorMessage = function(message = "Error") {
  const div = createElement("div");
  div.classList.add("display-error__container");

  const errorHeading = createElement('span');
  errorHeading.classList.add("display-error");

  errorHeading.innerText = message;
  div.append(errorHeading);
  mainSectionApiContainer.append(div);
};
export default displayApiErrorMessage; 
