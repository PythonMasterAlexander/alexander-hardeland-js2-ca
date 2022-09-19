const insertApiValuesOnPage = function(apiData, insertHtml, container) {
  for(let i = 0; i < apiData.length; i++) {
    const value = apiData[i].attributes;
    const idAttribute = apiData[i].id

    const cryptoTitle = value.title;
    const cryptoPrice = value.price;

    container.appendChild(insertHtml(cryptoTitle, cryptoPrice, idAttribute));
  }
  return container;
};
export default insertApiValuesOnPage; 
