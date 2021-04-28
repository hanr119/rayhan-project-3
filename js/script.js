// console.log("Hello is this working?")


// load the airtable library, call it "airtable"
// let and var are interchangable
var Airtable = require("airtable");
// console.log(Airtable);

// connect airtable base to website upostcardg API key which should be private to avoide hacking
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
    // showPostcards();
    try {
      showPostcards();
    } catch(e) {
      console.error(e);
    }
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

    // create new storage for postcards, for postcards data
    localStorage.setItem('postcards',JSON.stringify(postcards))

    // console.log(localStorage)

    postcards.forEach((postcard, index) => {

       // create postcard container, add image to it
      var postcardContainer  = document.createElement("img");
       postcardContainer.classList.add('postcard-container');

       // index number is added to each card
       postcardContainer.classList.add('postcard'+index);
       postcardContainer.src = postcard.fields.postcard_image[0].url;
       
      // add postcards to main container div
       document.querySelector(".container").append(postcardContainer);

    });
}


// if user clicks on postcard container, set item to that container
document.onclick = (event)=>{
  if (event.target.classList.contains('postcard-container')){

    // the index is updated to the card selected
    localStorage.setItem('index', event.target.classList[1].split('d')[1])

    // redirect to new page
    window.location = 'page.html'
  }
}