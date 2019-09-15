var resumeButton = document.querySelector(".resume-nav-button a");
var closeButton = document.querySelector(".resume-close-button a");
var resumeSection = document.querySelector("#resume");
var body = document.querySelector("body");
var links = document.getElementsByTagName("a");
var resumeOpen = 0;


resumeButton.addEventListener("click", toggleResume);
closeButton.addEventListener("click", toggleResume);

function toggleResume() {
    if (resumeOpen == 0) {
        body.style.overflowY = "hidden";
        resumeSection.style.width = "100%";
        for (var i = 0; i < links.length; i++) {
            links[i].tabIndex = -1;
        }
        closeButton.tabIndex = 0;
        resumeOpen = 1;
    } else {
        body.style.overflowY = "auto";
        resumeSection.style.width = "0px";
        for (var i = 0; i < links.length; i++) {
            links[i].tabIndex = 0;
        }
        closeButton.tabIndex = -1;
        resumeOpen = 0;
    }
}