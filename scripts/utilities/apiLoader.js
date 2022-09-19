import { createElement } from '../components/createCardFromApi.js';

const apiLoader = function(container) {
  const loaderContainer = createElement("div");
  loaderContainer.classList.add("api-loading-container");

  const firstBall = createElement("div");
  const secondBall = firstBall.cloneNode();
  const thirdBall = secondBall.cloneNode();
  const fourthBall = thirdBall.cloneNode();

  loaderContainer.append(firstBall, secondBall, thirdBall, fourthBall);

  container.append(loaderContainer);
  return container;
};
export default apiLoader; 
