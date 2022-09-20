import getValuesFromLocalStorage from './getValuesFromLocalStorage.js';
import { saveValueToLocalStorage } from './getValuesFromLocalStorage.js';
import { key } from '../partials/constants.js';

//When user is clicking the checkBox, the value he clicks get saved in the localStore array of objects
const clickOnCheckBox = function() {
  const dataIdOnValue = parseInt(this.dataset.id);
  const isCheckBoxChecked = this.checked;

  const valueInLocalStorage = getValuesFromLocalStorage();
  
  const doValueInLocalStorageExist = valueInLocalStorage.find((value) => {
    return value.id === dataIdOnValue;
  });

  if (doValueInLocalStorageExist === undefined) {
    const objectStructure = { id: dataIdOnValue };

    valueInLocalStorage.push(objectStructure);
    saveValueToLocalStorage(valueInLocalStorage); 

  } else {
    const newValueInLocalStore = valueInLocalStorage.filter((value) => value.id !== dataIdOnValue);  

    saveValueToLocalStorage(newValueInLocalStore);
  }


  const valueInLocalStorageIndex = valueInLocalStorage.findIndex((value) => {
    if (value.id === dataIdOnValue) {
      return true;
    }
  });

  valueInLocalStorage[valueInLocalStorageIndex].complete = isCheckBoxChecked;

  valueInLocalStorage.forEach((listValue) => {
    let arelistValueChecked = "";

    if (listValue.complete) {
      arelistValueChecked = "checked";  
    }

    //This is where I can log the array with the object that shows the state of the completed property, true or false
    //Now I need to get this list out and use it outside of this function 
    console.log(valueInLocalStorage);
    return valueInLocalStorage;
  });
};
export default clickOnCheckBox;
