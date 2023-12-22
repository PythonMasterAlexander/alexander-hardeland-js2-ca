import displayApiErrorMessage from '../utilities/displayApiErrorMessage.js';
import createCardFromApi from '../components/createCardFromApi.js';
import insertApiValuesOnPage from '../components/insertApiValuesOnPage.js';
import clickOnCheckBox from '../components/clickOnCheckBox.js';
import { mainSectionApiContainer, searchInput } from '../variables.js';
import { BASE_URL } from './constants.js';
export const apiUrl = BASE_URL + '/api' + '/cryptos';

const getApiValues = async function () {
  try {
    const response = await fetch(apiUrl);
    const apiResult = await response.json();

    const dataFromApiResult = apiResult.data;

    mainSectionApiContainer.replaceChildren();
    insertApiValuesOnPage(
      dataFromApiResult,
      createCardFromApi,
      mainSectionApiContainer
    );

    searchInput.addEventListener('keyup', () => {
      const keyValue = event.target.value.trim().toLowerCase();

      const filteredApiTitles = dataFromApiResult.filter(function (title) {
        const apiTitle = title.attributes.title;
        if (apiTitle.toLowerCase().startsWith(keyValue)) {
          return true;
        }
      });

      mainSectionApiContainer.replaceChildren();
      insertApiValuesOnPage(
        filteredApiTitles,
        createCardFromApi,
        mainSectionApiContainer
      );
    });

    const checkBoxes = document.querySelectorAll('[type=checkbox]');
    checkBoxes.forEach((checkBox) => {
      checkBox.addEventListener('click', clickOnCheckBox);
    });
  } catch (error) {
    mainSectionApiContainer.replaceChildren();
    displayApiErrorMessage('Failed to call Api');
  }
};
export default getApiValues;
