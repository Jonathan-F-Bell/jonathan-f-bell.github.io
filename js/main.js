var body = document.querySelector("body");

var darkButton = document.getElementById("dark-mode-button");
var medButton = document.getElementById("med-mode-button");
var lightButton = document.getElementById("light-mode-button");


darkButton.addEventListener("click", function() {colorMode(0) });
medButton.addEventListener("click", function() {colorMode(1) });
lightButton.addEventListener("click", function() {colorMode(2) });

prefersColor.addListener(updateColor);


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

function updateColor() {
    if (prefersColor.matches) {
        colorMode(2);
    } else {
        colorMode(0);
    }
}