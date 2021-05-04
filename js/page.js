
// get the postcard data from postcard.html
    var postcards = JSON.parse(localStorage.getItem('postcards'));

    // get the last index saved from postcard page
    var index = localStorage.getItem('index');

    // get data for that specific postcard
    var city = postcards[index].fields.city;
    var date = postcards[index].fields.date_founded;
    var postcardImg = postcards[index].fields.postcard_image[0].url;

    // create variables for the containers you want to place the data in
    var imageContainer = document.querySelector(".image-container"); 
    var pageDate = document.querySelector(".date-container")
    var pageCity = document.querySelector(".city-container")

    // add the data to containers in page

    imageContainer.src = postcardImg;
    pageDate.innerHTML = date;
    pageCity.innerHTML = city;

