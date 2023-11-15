const imgDiv = document.querySelector(".product-image");
const tag = document.querySelector(".tag");
const btn = document.getElementById("button")


function changeColorRed(){
    imgDiv.style.backgroundImage = "url('./public/img/redcar.jpg')";
    button.style.backgroundColor = "red";
    tag.style.backgroundColor = "red";
}

function changeColorGray(){
    imgDiv.style.backgroundImage = "url('./public/img/graycar.jpg')";
    button.style.backgroundColor = "gray";
    tag.style.backgroundColor = "gray";
}

function changeColorBlack(){
    imgDiv.style.backgroundImage = "url('./public/img/blackcar.jpg')"
    button.style.backgroundColor = "black";
    tag.style.backgroundColor = "black";
}