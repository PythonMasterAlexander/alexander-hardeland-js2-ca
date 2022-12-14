import displayApiErrorMessage from '../utilities/displayApiErrorMessage.js';
import createCardFromApi from './createCardFromApi.js';
import insertApiValuesOnPage from './insertApiValuesOnPage.js';
import clickOnCheckBox from './clickOnCheckBox.js';

import { mainSectionApiContainer, searchInput } from '../partials/variables.js';
import { baseUrl } from '../partials/constants.js';

export const apiUrl = baseUrl + "/api" + "/cryptos";

const getApiValues = async function() {
  try {
    const response = await fetch(apiUrl);
    const apiResult = await response.json();

    const dataFromApiResult = apiResult.data;

    mainSectionApiContainer.replaceChildren();
    insertApiValuesOnPage(dataFromApiResult, createCardFromApi, mainSectionApiContainer);

    
    searchInput.addEventListener("keyup", () => {
      const keyValue = event.target.value.trim().toLowerCase();

      const filteredApiTitles = dataFromApiResult.filter(function(title) {
        const apiTitle = title.attributes.title;
        if (apiTitle.toLowerCase().startsWith(keyValue)) {
          return true;
        } 
      });

      mainSectionApiContainer.replaceChildren();
      insertApiValuesOnPage(filteredApiTitles, createCardFromApi, mainSectionApiContainer);
    });

    const checkBoxes = document.querySelectorAll("[type=checkbox]");
    checkBoxes.forEach((checkBox) => {
      checkBox.addEventListener("click", clickOnCheckBox);
    });
  }

  catch(error) {
    mainSectionApiContainer.replaceChildren();
    displayApiErrorMessage("Failed to call Api");
  }
};
export default getApiValues; 
