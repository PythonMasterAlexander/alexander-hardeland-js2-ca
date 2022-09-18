import getValuesFromLocalStorage from './getValuesFromLocalStorage.js';
import { saveValueToLocalStorage } from './getValuesFromLocalStorage.js';
import { key } from '../partials/constants.js';

//When user is clicking the checkBox, the value he clicks get saved in the localStore array of objects
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

    //This dont work 
    //return newValueInLocalStore 
  }

  //newValueInLocalStorage is the list of objects stored in local storage,Error saveValueToLocalStorage is not defined
  //I need to compare the localStore against the dataset.id value on the checkBox the user is pushing
  //console.log(newValueInLocalStore);

  //If I do a console log of this, the checkBox gets loged when I press the checkBox
  //From this one I can get the data-id value
  console.log(this);

  
  //But then my problem is this, how can I get the value in localStorage here? The variable newValueInLocalStore is not recognised here. 
};
export default clickOnCheckBox;
