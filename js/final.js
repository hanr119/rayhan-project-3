// get the local storage data for image
var postcards =JSON.parse(localStorage.getItem('postcards'));
var index = localStorage.getItem('index');

// add image to page
var postcardImg = postcards[index].fields.postcard_image[0].url;
var imageContainer = document.querySelector(".image-container"); 
imageContainer.src = postcardImg;

// get local storage data for message
var message = JSON.parse(JSON.stringify(localStorage.getItem('message')));

// add message to page
var messageContainer = document.querySelector(".message-container"); 
messageContainer.innerHTML = message;
