const apiLoader = function(container) {
  const loaderContainer = document.createElement("div");
  loaderContainer.classList.add("api-loading-container");

  const firstBall = document.createElement("div");
  const secondBall = firstBall.cloneNode();
  const thirdBall = secondBall.cloneNode();
  const fourthBall = thirdBall.cloneNode();

  loaderContainer.append(firstBall, secondBall, thirdBall, fourthBall);

  container.append(loaderContainer);
  return container;
};
export default apiLoader; 
