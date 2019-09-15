var resumeButton = document.querySelector(".resume-nav-button a");
var closeButton = document.querySelector(".resume-close-button a");
var contentSection = document.querySelector("#content");
var resumeSection = document.querySelector("#resume");
var body = document.querySelector("body");
var links = document.getElementsByTagName("a");
var resumeOpen = 0;
var resumeWidth;


resumeButton.addEventListener("click", toggleResume);
closeButton.addEventListener("click", toggleResume);

function toggleResume() {
    if (resumeOpen == 0) {
        resumeWidth = resumeSection.offsetWidth;
        body.style.overflowY = "hidden";
        resumeSection.style.transform = "translate(0 , 0)";
        contentSection.style.transform = "translate(-" + resumeWidth + "px , 0)";
        for (var i = 0; i < links.length; i++) {
            links[i].tabIndex = -1;
        }
        closeButton.tabIndex = 0;
        resumeOpen = 1;
    } else {
        body.style.overflowY = "auto";
        resumeSection.style.transform = "translate(100%, 0)";
        contentSection.style.transform = "translate(0 , 0)";
        for (var i = 0; i < links.length; i++) {
            links[i].tabIndex = 0;
        }
        closeButton.tabIndex = -1;
        resumeOpen = 0;
    }
}