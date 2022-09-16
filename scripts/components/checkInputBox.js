const checkInputBox = function() {
  const isCheckInputChecked = event.target.checked; 

  if (isCheckInputChecked) {
    //if true, push obj to localStorage array
    console.log(event.target);
  }
};
export default checkInputBox; 
