import displayApiErrorMessage from './displayApiErrorMessage.js';
import createCardFromApi from './createCardFromApi.js';

import insertApiValuesOnPage from './insertApiValuesOnPage.js';
//import checkInputBox from'./checkInputBox.js';

import { mainSectionApiContainer } from '../partials/variables.js';
import { baseUrl } from '../partials/constants.js';

import getValuesFromLocalStorage from './getValuesFromLocalStorage.js';
import { saveValueToLocalStorage } from './getValuesFromLocalStorage.js';

const apiUrl = baseUrl + "/api" + "/cryptos";

export const getApiValues = async function() {

  try {
    const response = await fetch(apiUrl);

    const apiResult = await response.json();
    const dataFromApiResult = apiResult.data;

    mainSectionApiContainer.replaceChildren();
    insertApiValuesOnPage(dataFromApiResult, createCardFromApi, mainSectionApiContainer);

    //Test code
    //Here is where I get stuck, I want to loop over the dataFromApiResult to get the id on each object
    //Then I can compare the id from the dataIdOnCheckBox to the id from dataFromApiResult against each other and push to localStorage
    //But when I loop over the dataFromApiResult and try and console log, the results repets over 6 times or so 
    const inputBoxes = document.querySelectorAll("input");
    for(let i = 0; i < inputBoxes.length; i++) {
      const inputBox = inputBoxes[i];

      const checkInputBox = function() {
        const isCheckInputChecked = event.target.checked; 
        const dataIdOnCheckBox = event.target.dataset.id;

        if (isCheckInputChecked) {
          //This is where I want to push the obj to the localStorage array. Only problem is I dont know how to  
          //if true, push obj to localStorage array
          for(let i = 0; i < dataFromApiResult.length; i++) {
            console.log(dataFromApiResult[i]);
            const checkId = dataFromApiResult[i];
          }
        }
      };

      inputBox.addEventListener("click", checkInputBox);
    }
  }
  catch(error) {
    mainSectionApiContainer.replaceChildren();

    displayApiErrorMessage();
  }
};
