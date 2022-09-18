import getValuesFromLocalStorage from './getValuesFromLocalStorage.js';
import { saveValueToLocalStorage } from './getValuesFromLocalStorage.js';
import { key } from '../partials/constants.js';

//When user is clicking the checkBox, the value he clicks get saved in the localStore array of objects
const clickOnCheckBox = function() {
  const dataIdOnValue = this.dataset.id;
  let isChecked = this.checked;
  console.log(isChecked);

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

  //Here I am trying to mark the checkBoxes as marked. By comparing the two values but it don't work
  //I tried to parseInt both values but using typeof tells me that both values are string value
  const getLocalStorageId = valueInLocalStorage.find((value) => {
    return value.id === dataIdOnValue;
  });
  
  console.log(getLocalStorageId);
  if (getLocalStorageId) {
    isChecked = true;
  } else {
    isChecked = false;
  }

};
export default clickOnCheckBox;
