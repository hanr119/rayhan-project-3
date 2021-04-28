var submitButton = document.querySelector(".submit-button")
var formInput = document.querySelector(".continent-input")
// listen for key press event on the input
formInput.addEventListener("keypress", function(event) {
    // run this code if enter key is pressed
    if(event.key === 'Enter') {
        // prevent page reload
        event.preventDefault();
        // run the continent checking function
        checkContinentValue()       
    }
})
// listen for click on button
submitButton.addEventListener("click", function(event){
    // stop the page from refreshing
    event.preventDefault();
    // run the continent checking function
    checkContinentValue()
})
// this function checks to see if value entered matches continent
function checkContinentValue() {
  // a new variable that converts any submitted value to uppercase to match queries
  let newValue = formInput.value.toUpperCase();
  // log this new value to test
  console.log(newValue)
  if (newValue.includes("NORTH AMERICA")) {
      window.location.href = "./continents/north-america.html"
  }
  else if (newValue.includes("AFRICA")) {
      window.location.href = "./continents/africa.html"
  }
  else if (newValue.includes("ASIA")) {
      window.location.href = "./continents/asia.html"
  }
  else if (newValue.includes("AUSTRALIA")) {
      window.location.href = "./continents/australia.html"
  }
  else if (newValue.includes("ANTARCTICA")) {
      window.location.href = "./continents/antarctica.html"
  }
  else if (newValue.includes("EUROPE")) {
      window.location.href = "./continents/europe.html"
  }
  else if (newValue.includes("SOUTH AMERICA")) {
      window.location.href = "./continents/south-america.html"
  }
  else {
      alert("Not a continent, try again")
  }
}