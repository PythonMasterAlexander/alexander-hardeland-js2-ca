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

      //This is where I can console log my localStorage list.
      //Only problem is, if I try putting it in a variable, the loading of my api fails.
      //Next move is to save the list state so when I refresh the page, if there is any checkbox checked( in locla storage ) they should stay checked
      //Then I need to display them in the favourites page if they are
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
