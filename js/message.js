
let submitBtn = document.querySelector(".js-submit")

// when user clicks on submit button
submitBtn.addEventListener("click", function(e) {
    e.preventDefault();

    // get the message
    var messageInput= document.querySelector(".textmessage");

    // store the message in local storage
    localStorage.setItem("message", messageInput.value);
  
    // redirect to final page
    window.location = 'final.html'
})