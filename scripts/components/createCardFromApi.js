export const createElement = function(typeOfElement) {
  const element = document.createElement(typeOfElement);

  return element;
};

const createCardFromApi = function(title, price) {
  const div = createElement('div');
  div.setAttribute("class", "card-container");

  const cardHeading = createElement('h3');
  const priceTitleSpan = createElement('span');

  const priceSpan = priceTitleSpan.cloneNode();
  const checkBox = createElement('input');

  cardHeading.innerText = title;
  priceSpan.innerText = price;

  priceTitleSpan.innerText = "Price" 
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", "checkbox");

  div.append(cardHeading, priceTitleSpan, priceSpan, checkBox);
  return div;
};
export default createCardFromApi; 
