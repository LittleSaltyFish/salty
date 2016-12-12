var box1Div, box2Div, msgDiv, img1;

window.onload = function() {
    box1Div = document.getElementById("box1");
    box2Div = document.getElementById("box2");
    msgDiv = document.getElementById("msg");
    img1 = document.getElementById("img1");
    // box1Div.ondragenter = function(e) {
    //     showObj(e);
    // }
    box1Div.ondragover = function(e) {
        e.preventDefault();
    }
    box2Div.ondragover = function(e) {
        e.preventDefault();
    }
    img1.ondragstart = function(e) {
        e.dataTransfer.setData("imgId", "img1");
    }
    box1Div.ondrop = dropImghandler(e);
    box2Div.ondrop = dropImghandler(e);

}

function dropImghandler(e) {
    showObj(e.dataTransfer);
    e.preventDefault();
    var img = document.getElementById(e.dataTransfer.getData("imgId"));
    e.target.appendChild(img);
}

function showObj(obj) {
    var s = "";
    for (var k in obj) {
        s += k + ":" + obj[k] + "<br/>";
    }
    msgDiv.innerHTML = s;
}