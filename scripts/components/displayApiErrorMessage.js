import { createElement } from './createCardFromApi.js';
import { mainSectionApiContainer } from '../partials/variables.js';

const displayApiErrorMessage = function() {
  const errorHeading = createElement('span');
  errorHeading.classList.add("display-error");

  errorHeading.innerText = "Loading API failed";
  mainSectionApiContainer.append(errorHeading);
};
export default displayApiErrorMessage; 
