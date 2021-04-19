// console.log("Hello is this working?")


// load the airtable library, call it "airtable"
// let and var are interchangable
var Airtable = require("airtable");
// console.log(Airtable);

// connect airtable base to website using API key which should be private to avoide hacking
var base = new Airtable({ apiKey: "keyvXWve8WWEVE4xq" }).base(
"app5Jrg21YJ7vBuV7"
);

// get airtable data and specify how to retrieve it with functions and separate words with underscores all lowercase
base("postcards").select({}).eachPage(gotPageOfPostcards, gotAllPostcards);

// an empty array (a list) to hold our data and const is like var but is not interchangeable
var postcards = [];

// callback function that receives our data
function gotPageOfPostcards(records, fetchNextPage) {
    console.log("gotPageOfPostcards()");
    // add the records from this page to our array
    postcards.push(...records);
    // request more pages
    fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllPostcards(err) {
    console.log("gotAllPostcards()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading postcards");
      console.error(err);
      return;
    }
  
    // call functions to log and show the songs
    consoleLogPostcards();
    showPostcards();
}

  // just loop through the songs and console.log them
function consoleLogPostcards() {
    console.log("consoleLogPostcards()");
    postcards.forEach((postcard) => {
      console.log("Postcards:", postcard);
    });
}
  // loop through airtable data, and display them onto our page
function showPostcards() {
    console.log("showPostcards()");
    postcards.forEach((postcard) => {
        // adding song title to page
        var postcardTitle = document.createElement("h1");
        postcardTitle.innerText = postcard.fields.city;
        document.body.appendChild(postcardTitle);

        // adding artist name to page
        var postcardDate = document.createElement("h1");
        postcardDate.innerText = postcard.fields.date_founded;
        document.body.appendChild(postcardDate);

        // adding artist image to page
        var  postcardImage = document.createElement("img");
        postcardImage.src = postcard.fields.postcard_image[0].url;
        document.querySelector(".container").append(postcardImage);
    });
}