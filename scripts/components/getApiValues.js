import displayApiErrorMessage from './displayApiErrorMessage.js';
import { baseUrl } from '../partials/constants.js';

const apiUrl = baseUrl + "/api" + "/cryptos";

export const getApiValues = async function() {

  try {
    const response = await fetch(apiUrl);

    const apiResult = await response.json();
    const dataFromApiResult = apiResult.data;

    console.log(dataFromApiResult);
  }
  catch(error) {
    displayApiErrorMessage();
  }
};
