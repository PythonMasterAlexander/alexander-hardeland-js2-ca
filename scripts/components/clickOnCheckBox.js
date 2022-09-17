import getValuesFromLocalStorage from './getValuesFromLocalStorage.js';
import { saveValueToLocalStorage } from './getValuesFromLocalStorage.js';
import { key } from '../partials/constants.js';

const clickOnCheckBox = function() {
  const dataIdOnValue = this.dataset.id;

  const valueInLocalStorage = getValuesFromLocalStorage();
  
  const doValueInLocalStorageExist = valueInLocalStorage.find((value) => {
    return value.id === dataIdOnValue;
  });

  if (doValueInLocalStorageExist === undefined) {
    const objectStructure = { id: dataIdOnValue };

    //Store the value of local storage in a variables, if the variable is empty it returns an empty array
    valueInLocalStorage.push(objectStructure);
    saveValueToLocalStorage(valueInLocalStorage); 
  } else {
    const newValueInLocalStore = valueInLocalStorage.filter((value) => value.id !== dataIdOnValue);  

    saveValueToLocalStorage(newValueInLocalStore);
  }
};
export default clickOnCheckBox;
