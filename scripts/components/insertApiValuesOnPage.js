const insertApiValuesOnPage = function(apiData, insertHtml, container) {
  for(let i = 0; i < apiData.length; i++) {
    const value = apiData[i].attributes;

    const cryptoTitle = value.title;
    const cryptoPrice = value.price;
    container.append(insertHtml(cryptoTitle, cryptoPrice));
  }
  return container;
};
export default insertApiValuesOnPage; 
