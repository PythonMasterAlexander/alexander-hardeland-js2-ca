import { mainSectionApiContainer } from '../partials/variables.js';

export const createElement = function(typeOfElement) {
  const element = document.createElement(typeOfElement);

  return element;
};

export const createCardFromApi = function() {
  console.log(mainSectionApiContainer);
};
