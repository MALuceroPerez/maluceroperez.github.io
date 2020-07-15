var body                = document.body,
    selectInput         = document.querySelector("select")
    colorPickerLeft     = document.querySelector("#color1"),
    colorPickerRight    = document.querySelector("#color2"),
    lgDisplay           = document.querySelector("#lg-display");


colorPickerLeft.addEventListener("input", updateDOM);
colorPickerRight.addEventListener("input", updateDOM);
selectInput.addEventListener("input", updateDOM);



function updateDOM() {
    var linearGradientText = convertToLG(getDirection(), getColorValueLeft(), getColorValueRight());
    body.style.background = linearGradientText;
    lgDisplay.textContent = linearGradientText;
}

function convertToLG(direction, colorValueLeft, colorValueRight) {
    return "linear-gradient(to " + direction + "," + colorValueLeft + ", " + colorValueRight + ")";
}

function getColorValueLeft () {
    return colorPickerLeft.value;
}
function getColorValueRight () {
    return colorPickerRight.value;
}

function getDirection () {
    return selectInput.value;
}
