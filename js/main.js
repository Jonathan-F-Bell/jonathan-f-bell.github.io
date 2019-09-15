var resumeButton = document.querySelector(".resume-nav-button a");
var closeButton = document.querySelector(".resume-close-button a");
var resumeSection = document.querySelector("#resume");
var body = document.querySelector("body");
var links = document.getElementsByTagName("a");
var resumeLinks = document.querySelectorAll("#resume a");
var resumeOpen = 0;

var darkButton = document.getElementById("dark-mode-button");
var medButton = document.getElementById("med-mode-button");
var lightButton = document.getElementById("light-mode-button");


resumeButton.addEventListener("click", toggleResume);
closeButton.addEventListener("click", toggleResume);

darkButton.addEventListener("click", function() {colorMode(0) });
medButton.addEventListener("click", function() {colorMode(1) });
lightButton.addEventListener("click", function() {colorMode(2) });

function toggleResume() {
    if (resumeOpen == 0) {
        body.style.overflowY = "hidden";
        resumeSection.style.width = "100%";
        for (var i = 0; i < links.length; i++) {
            links[i].tabIndex = -1;
        }
        for (var i = 0; i < resumeLinks.length; i++) {
            resumeLinks[i].tabIndex = 0;
        }
        resumeOpen = 1;
    } else {
        body.style.overflowY = "auto";
        resumeSection.style.width = "0px";
        for (var i = 0; i < links.length; i++) {
            links[i].tabIndex = 0;
        }
        for (var i = 0; i < resumeLinks.length; i++) {
            resumeLinks[i].tabIndex = -1;
        }
        resumeOpen = 0;
    }
}

/**
 * Sets the color mode based on the given number
 * @param {Integer} mode 0 = dark, 1 = medium, 2 = light 
 */
function colorMode(mode) {
    if (mode == 0) {
        body.className = "";
    } else if (mode == 1) {
        body.className = "med_theme";
    } else if (mode == 2) {
        body.className = "light_theme";
    }
}