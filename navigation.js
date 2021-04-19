
var submitButton = document.querySelector(".submit-button")

var formInput = document.querySelector("input[value=type-continent-name]")

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    if (formInput.value == 'north america' || 'North America' || 'NORTH AMERICA') {
        window.location.href = "./continents/north-america.html"
    }
    if (formInput.value == 'africa' || 'Africa' || 'AFRICA') {
        window.location.href = "./continents/africa.html"
    }
    if (formInput.value == 'asia' || 'Asia' || 'ASIA') {
        window.location.href = "./continents/asia.html"
    }
    if (formInput.value == 'australia' || 'Australia' || 'AUSTRALIA') {
        window.location.href = "./continents/australia.html"
    }
    if (formInput.value == 'antarctica' || 'Antarctica' || 'ANTARCTICA') {
        window.location.href = "./continents/antarctica.html"
    }
    if (formInput.value == 'europe' || 'Europe' || 'EUROPE') {
        window.location.href = "./continents/europe.html"
    }
    if (formInput.value == 'south america' || 'South America' || 'SOUTH AMERICA') {
        window.location.href = "./continents/south-america.html"
    }
})