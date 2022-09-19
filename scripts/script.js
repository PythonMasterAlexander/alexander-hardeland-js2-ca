import getApiValues from './components/getApiValues.js';
import apiLoader from './utilities/apiLoader.js';

import { mainSectionApiContainer } from './partials/variables.js';

apiLoader(mainSectionApiContainer);

setTimeout(function() {
  mainSectionApiContainer.innerHTML = getApiValues();  
}, 3000);

