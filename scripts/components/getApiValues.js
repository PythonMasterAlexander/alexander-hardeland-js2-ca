import displayApiErrorMessage from './displayApiErrorMessage.js';
import createCardFromApi from './createCardFromApi.js';
import insertApiValuesOnPage from './insertApiValuesOnPage.js';
import clickOnCheckBox from './clickOnCheckBox.js';

import { mainSectionApiContainer } from '../partials/variables.js';
import { baseUrl } from '../partials/constants.js';

const apiUrl = baseUrl + "/api" + "/cryptos";

export const getApiValues = async function() {
  try {
    const response = await fetch(apiUrl);

    const apiResult = await response.json();
    const dataFromApiResult = apiResult.data;

    mainSectionApiContainer.replaceChildren();
    insertApiValuesOnPage(dataFromApiResult, createCardFromApi, mainSectionApiContainer);

    const checkBoxes = document.querySelectorAll("[type=checkbox]");
    checkBoxes.forEach((checkBox) => {
      checkBox.addEventListener("click", clickOnCheckBox);
    });
  }
  catch(error) {
    mainSectionApiContainer.replaceChildren();

    displayApiErrorMessage();
  }
};
