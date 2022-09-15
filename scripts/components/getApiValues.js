import displayApiErrorMessage from './displayApiErrorMessage.js';
import createCardFromApi from './createCardFromApi.js';

import checkInputBox from'./checkInputBox.js';

import { mainSectionApiContainer } from '../partials/variables.js';
import { baseUrl } from '../partials/constants.js';

const apiUrl = baseUrl + "/api" + "/cryptos";

export const getApiValues = async function() {

  try {
    const response = await fetch(apiUrl);

    const apiResult = await response.json();
    const dataFromApiResult = apiResult.data;

    mainSectionApiContainer.replaceChildren();

    for(let i = 0; i < dataFromApiResult.length; i++) {
      const dataAttributes = dataFromApiResult[i].attributes;

      const cryptoTitle = dataAttributes.title; 
      const cryptoPrice = dataAttributes.price;

      mainSectionApiContainer.append(createCardFromApi(cryptoTitle, cryptoPrice));
    }
    console.log(dataFromApiResult[0]);


    const inputBoxes = document.querySelectorAll("#checkbox");
    for(let i = 0; i < inputBoxes.length; i++) {
      const inputBox = inputBoxes[i];

      inputBox.addEventListener("click", checkInputBox);
    }
  }
  catch(error) {
    mainSectionApiContainer.replaceChildren();

    displayApiErrorMessage();
  }
};
