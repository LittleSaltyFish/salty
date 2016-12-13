var CANVAS_WIDTH = 200,
    CANVAS_HEIGHT = 200;
window.onload = function() {
    createCanvas();
}

function createCanvas() {
    document.body.innerHTML = "<canvas id=\"mycanvas\" width=\"" + CANVAS_WIDTH + "\" height=\"" + CANVAS_HEIGHT + "\"></canvas>"
}