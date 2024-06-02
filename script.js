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
  fullscreenDiv.onclick = function() {
    document.body.removeChild(fullscreenDiv);
  };
}

//Swiper
var swiper;
function initSwiper() {
    swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
var swiper;
function initSwiper() {
    swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
function checkScreenSize() {
    if (window.innerWidth < 768) {
        if (!swiper) {
            initSwiper();
        }
        document.querySelector('.photo-gallery').style.display = 'none';
        document.querySelector('.swiper-container').style.display = 'block';
    } else {
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }
        document.querySelector('.photo-gallery').style.display = 'block';
        document.querySelector('.swiper-container').style.display = 'none';
    }
}
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
