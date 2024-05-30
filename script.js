// script.js
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarLinks = document.querySelector('.navbar-links');
  
    mobileMenu.addEventListener('click', function() {
      navbarLinks.classList.toggle('active');
    });
  });
  
 
// Function to open image in fullscreen mode
function openFullscreen(image) {
  var fullscreenDiv = document.createElement("div");
  fullscreenDiv.classList.add("fullscreen-image");
  var img = document.createElement("img");
  img.src = image.src;
  fullscreenDiv.appendChild(img);
  document.body.appendChild(fullscreenDiv);

  // Close fullscreen mode on clicking outside the image
  fullscreenDiv.onclick = function() {
    document.body.removeChild(fullscreenDiv);
  };
}

