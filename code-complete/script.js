// CIRCLE INTERACTION
let circlesArray = document.getElementsByTagName('circle');

let circle = circlesArray[0];

circle.onclick = function () {
    circle.setAttribute('r', 100);
}

// RECTANGLE INTERACTION
let rectanglesArray = document.getElementsByTagName('rect');
let rect = rectanglesArray[0];
rect.onclick = function () {
    rect.style.strokeWidth = '2';
}