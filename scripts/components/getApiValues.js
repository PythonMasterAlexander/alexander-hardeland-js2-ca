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

    //Need to get the value of the api result and then store it in the localStorage array and be able to show this array in the favourites page 
    let arr = [];
    for(let i = 0; i < dataFromApiResult.length; i++) {
      const test = dataFromApiResult[i];
      arr.push(test);
      saveValueToLocalStorage(arr);
    }
    console.log(arr);

    //Looping over the input boxes, if the input box is checked, save the obj to the localStorage array. The obj is the same as the one above
    const inputBoxes = document.querySelectorAll("#checkbox");
    for(let i = 0; i < inputBoxes.length; i++) {
      const inputBox = inputBoxes[i];

      const checkInputBox = function() {
        const isCheckInputChecked = event.target.checked; 

        if (isCheckInputChecked) {
          //if true, push obj to localStorage array
          console.log(event.target);
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
