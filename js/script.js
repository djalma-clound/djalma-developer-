const bars = document.getElementById("bars");

bars.addEventListener("click", () => {
const header = document.querySelector("header");
header.classList.toggle('active');

});

// Wait for the DOM to be fully loaded before executing any JavaScript
document.addEventListener('DOMContentLoaded', function() {

    // Get all the "Read more" links in the document
    var readMoreLinks = document.querySelectorAll('a[href="#"]');
  
    // Loop through each link and add a click event listener
    for (var i = 0; i < readMoreLinks.length; i++) {
      readMoreLinks[i].addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        alert('You clicked on the "Read more" link'); // Display an alert message
      });
    }
  
  });
