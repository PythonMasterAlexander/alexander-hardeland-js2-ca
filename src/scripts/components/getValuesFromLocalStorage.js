import { KEY } from '../api/constants.js';
export const saveValueToLocalStorage = function (valueInList) {
  localStorage.setItem(KEY, JSON.stringify(valueInList));
};

const getValuesFromLocalStorage = function () {
  const localStorageList = localStorage.getItem(KEY);

  if (!localStorageList) {
    return [];
  }

  return JSON.parse(localStorageList);
};
export default getValuesFromLocalStorage;
