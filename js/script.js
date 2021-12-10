var typed = new Typed(".typing", {
    strings: ["Tech Enthusiast", "Music Lover", "Cricket Lover", "Potter Head", "Cinephile"],
    typeSpeed: 100,
    // backSpeed: 100,
    loop: true,
  });

var typed = new Typed(".typing2", {
    strings: ["IT Sophomore at IIIT Allahabad"],

    typeSpeed: 100,
  });

var typed = new Typed(".typing3", {
    strings: ["Hola, Hello, Namaste"],
    typeSpeed: 100,
    loop: true,
  });

var navbar = document.getElementById("navbar-nav");
var link = navbar.getElementsByClassName("nav-item");
var an = link.getElementsByClassName("nav-link");
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}