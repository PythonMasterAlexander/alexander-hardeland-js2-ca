import { key } from '../partials/constants.js';

export const saveValueToLocalStorage = function(valueInList) {
  localStorage.setItem(key, JSON.stringify(valueInList));
};

const getValuesFromLocalStorage = function() {
  const localStorageList = localStorage.getItem(key);

  if (!localStorageList) {
    return [];
  }

  return JSON.parse(localStorageList);
};
export default getValuesFromLocalStorage; 
