import getValuesFromLocalStorage from './getValuesFromLocalStorage.js';
const createCardFromApi = function (title, price, id, information) {
  const div = document.createElement('div');
  div.setAttribute('class', 'card-container');

  const cardHeading = document.createElement('h3');
  cardHeading.innerText = title;

  const priceTitleSpan = document.createElement('span');
  priceTitleSpan.innerText = 'Price';

  const priceSpan = priceTitleSpan.cloneNode();
  priceSpan.style = 'margin-left: 10px;';
  priceSpan.innerText = price + ' $';

  const informationElement = document.createElement('p');
  informationElement.innerText = information;

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('data-id', id);
  checkBox.setAttribute('data-title', title);

  const apiInLocalStorage = getValuesFromLocalStorage();

  const isApiInLocalStorage = apiInLocalStorage.find((api) => {
    return parseInt(api.id) === id;
  });

  if (isApiInLocalStorage) {
    checkBox.setAttribute('checked', 'checked');
  }

  div.append(
    cardHeading,
    priceTitleSpan,
    priceSpan,
    checkBox,
    informationElement
  );
  return div;
};
export default createCardFromApi;
