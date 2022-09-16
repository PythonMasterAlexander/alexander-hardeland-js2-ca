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
    //Need to get the value of the api result and then store it in the localStorage array and be able to show this array in the favourites page 
    let arr = []; //getValuesFromLocalStorage();
    for(let i = 0; i < dataFromApiResult.length; i++) {
      const test = dataFromApiResult[i];
      arr.push(test);
      saveValueToLocalStorage(arr);
    }

    //Test code
    //Looping over the input boxes, if the input box is checked, save the obj to the localStorage array. The obj is the same as the one above
    const inputBoxes = document.querySelectorAll("#checkbox");
    for(let i = 0; i < inputBoxes.length; i++) {
      const inputBox = inputBoxes[i];

      const checkInputBox = function() {
        const isCheckInputChecked = event.target.checked; 

        if (isCheckInputChecked) {
          //This is where I want to push the obj to the localStorage array. Only problem is I dont know how to get the object in dataFromApiResult from here
          //if true, push obj to localStorage array
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
