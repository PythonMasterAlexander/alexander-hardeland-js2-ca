const insertApiValuesOnPage = function(apiData, insertHtml, container) {
  for(let i = 0; i < apiData.length; i++) {
    const value = apiData[i].attributes;
    const idAttribute = apiData[i].id

    const cryptoTitle = value.title;
    const cryptoPrice = value.price;
    const cryptoInformation = value.description;

    container.appendChild(insertHtml(cryptoTitle, cryptoPrice, idAttribute, cryptoInformation));
  }
  if (!apiData.length) {
    const cardHeading = document.createElement("h2");
    cardHeading.innerText = "This Crypto are not in the database";

    container.appendChild(cardHeading);
  }

  return container;
};
export default insertApiValuesOnPage; 
