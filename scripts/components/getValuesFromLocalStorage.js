import { key } from '../partials/constants.js';

export const saveValueToLocalStorage = function(valueInList) {
  localStorage.setItem(key, JSON.stringify(valueInList));
};

const getValuesFromLocalStorage = function() {
  const localStorageList = JSON.parse(localStorage.getItem(key)); 

  if (!localStorageList) {
    return [];
  }

  return localStorageList;
};
export default getValuesFromLocalStorage; 
