import getApiValues from './components/getApiValues.js';
import apiLoader from './utilities/apiLoader.js';
import getValuesFromLocalStorage from './components/getValuesFromLocalStorage.js';

import { mainSectionApiContainer } from './partials/variables.js';

apiLoader(mainSectionApiContainer);

setTimeout( async function() {
  mainSectionApiContainer.append = await getApiValues();  
}, 3000);


//This is my local storage list, when printed to console and checkbox pushed it shows undefined. Why not the complete state of true?
//When the same button is pushed a second time. it shows a complete state of false. Just like it should. 
//Also if I put it in a variable, the loading of the api fails.
//const localStorage = getValuesFromApiContainer();
console.log(getValuesFromLocalStorage());
