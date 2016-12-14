var canvas;
var stage;
var txt;
var count = 0;
window.onload = function() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);

    txt = new createjs.Text("number->", "20px Arial", "#ff7700");
    stage.addChild(txt);

    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", tick);
}

function tick(e) {
    count++;
    txt.text = "number->" + count + "!";
    stage.update();
}