document.addEventListener("DOMContentLoaded", function () {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const redInput = document.getElementById("red-input");
    const greenInput = document.getElementById("green-input");
    const blueInput = document.getElementById("blue-input");
    const colorBox = document.getElementById("color-box");
    const hexCode = document.getElementById("hex-code");
    const colorPicker = document.getElementById("color-picker");

    function updateColor() {
        let r = parseInt(red.value);
        let g = parseInt(green.value);
        let b = parseInt(blue.value);

        let hex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`.toUpperCase();

        colorBox.style.backgroundColor = `rgb(${r},${g},${b})`;
        hexCode.textContent = hex;
        colorPicker.value = hex;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
    }

    function updateSliders() {
        let r = parseInt(redInput.value);
        let g = parseInt(greenInput.value);
        let b = parseInt(blueInput.value);

        if (isNaN(r) || r < 0 || r > 255) r = 0;
        if (isNaN(g) || g < 0 || g > 255) g = 0;
        if (isNaN(b) || b < 0 || b > 255) b = 0;

        red.value = r;
        green.value = g;
        blue.value = b;

        updateColor();
    }

    function updateFromColorPicker() {
        let hex = colorPicker.value;
        let r = parseInt(hex.substring(1, 3), 16);
        let g = parseInt(hex.substring(3, 5), 16);
        let b = parseInt(hex.substring(5, 7), 16);

        red.value = r;
        green.value = g;
        blue.value = b;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        colorBox.style.backgroundColor = hex;
        hexCode.textContent = hex.toUpperCase();
    }

    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);

    redInput.addEventListener("input", updateSliders);
    greenInput.addEventListener("input", updateSliders);
    blueInput.addEventListener("input", updateSliders);

    colorPicker.addEventListener("input", updateFromColorPicker);
});
