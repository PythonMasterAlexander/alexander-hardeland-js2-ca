import displayApiErrorMessage from '../utilities/displayApiErrorMessage.js';
import createCardFromApi from './createCardFromApi.js';
import insertApiValuesOnPage from './insertApiValuesOnPage.js';
import clickOnCheckBox from './clickOnCheckBox.js';
import getValuesFromLocalStorage from './getValuesFromLocalStorage.js';

import { mainSectionApiContainer, searchInput } from '../partials/variables.js';
import { baseUrl } from '../partials/constants.js';

const apiUrl = baseUrl + "/api" + "/cryptos";

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

      //Test is the list localStorage list, it is an array of objects and each object shows the id and completed state of either true or false
      //Now I need to make it so if there is any value in local storage, the checkbox for this value is checked if you refresh the page
      //Then I need to get those values in the favourites page
      console.log(getValuesFromLocalStorage());
      const test = getValuesFromLocalStorage();
      console.log(test);
    });
  }

  catch(error) {
    mainSectionApiContainer.replaceChildren();
    displayApiErrorMessage("Failed to call Api");
  }
};
export default getApiValues; 
