import { mainSectionApiContainer } from '../partials/variables.js';

const displayApiErrorMessage = function(message = "Error") {
  const div = document.createElement("div");
  div.classList.add("display-error__container");

  const errorHeading = document.createElement('span');
  errorHeading.classList.add("display-error");

  errorHeading.innerText = message;
  div.append(errorHeading);
  mainSectionApiContainer.append(div);
};
export default displayApiErrorMessage; 
