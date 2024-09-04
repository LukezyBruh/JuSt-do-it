
//пример 1
var i = 0;
var image = document.getElementById("image");
var imgs = new Array("img/zh.jpg","/img/kyra.jpg","img/jaba.jpg", "/img/god.jpg", "/img/ghost.jpg","/img/grib.jpg");

image.onclick = function() {
    i++; 
    if(i >= imgs.length) i=0;  
    image.src = imgs[i]; 
}

//пример 2
const buttonEl1 = document.getElementById('button1');
const text = document.getElementById('unvisible');

buttonEl1.onclick = function() {
    text.style.opacity = 1;
}

//пример 3
const buttonEl2 = document.getElementById('button2');
const unvisible2 = document.getElementById('unvisible2');

buttonEl2.onclick = function() {
    unvisible2.style.opacity = 1;
}

//пример 4
const border1 = document.getElementById('kyb');

border1.onclick = function() {
    border1.style.borderColor = getColor();
}

function getColor() {
    const border = ['#EBCD64', '#C45BEB', '#49EB79', '#505EEB', '#EB6B6A'];
    const randomColorIndex = Math.floor(Math.random() * border.length);
    return border[randomColorIndex];
}

